const { getUserById, createNewFilm, searchDogByName, getAllDogs, filmApi} = require('../controllers/getController');
const deleteFilmController = require ('../controllers/deleteFilmController')

//  este es el handler de /dogs (muestra perro)

const getFilmHandler = async(req, res) =>{
    //const {name} = req.query;
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


// este es /dogs/name?= 

const getNameHandler = async(req, res) =>{
    const {name} = req.query;
    const allDogs = await getAllDogs();

    if (name) {
        const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));//si el perro existe guardame sus parametros aca.
        dog.length ? res.status(200).json(dog) : res.status(404).json({message:"Dog not found"}); 
    } else {
        res.status(200).json(allDogs);
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
                    getNameHandler};