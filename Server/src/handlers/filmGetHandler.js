const {createNewFilm,  filmApi, putDbFilm, getIdController} = require('../controllers/getController');
const deleteFilmController = require ('../controllers/deleteFilmController')



const getFilmHandler = async(req, res) =>{
    try {
        const response = await filmApi()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

//  este es /film/:id para borrar una pelicula 

const deleteIdHandler = async(req, res) =>{
    const  {id} = req.params;
        try {
            const deleteFilm = await deleteFilmController(id);
            res.status(200).json(deleteFilm)
        } catch (error) {
            res.status(400).json({error:error.message});
    }
};

const getIdFilmHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? 'bdd' : 'api';
  try {
    const getIdFilm = await getIdController(id, source);
    res.status(200).json(getIdFilm)
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// este es /film/id = para que me traiga de la db por id (en el front al seleccionar una pelicula ) 

const putIdHandler = async(req, res) =>{
    const  {id} = req.params;
    const {title, year,language,overview} = req.body;
    try {
    const putFilm = await putDbFilm(id, { title, year, language, overview })
    res.status(201).json({message:putFilm})
  } catch (error) {
    console.error('Error updating movie:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
 

// post/film crea una pelicula    
    
const postFilmHandler = async(req, res) => {
        try {
            const {title, year,language,overview, image, created} = req.body;
            const newFilm = await createNewFilm(title, year,language,overview,image,created);
            res.status(201).json({message:newFilm}); //201 exito creado
        } catch (error) {
            res.status(400).json({error:error.message});
        }
};



module.exports =    {getFilmHandler, 
                    postFilmHandler,
                    deleteIdHandler, 
                    putIdHandler, getIdFilmHandler};