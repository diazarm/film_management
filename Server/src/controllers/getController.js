const {Films, Temperaments} = require ('../db');
const axios = require('axios');
const { API_KEY } = process.env;

// Generar un número aleatorio entre 1 y 500 (ambos inclusive)
const randomPage = Math.floor(Math.random() * 500) + 1;

const LinkApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${randomPage}&api_key=${API_KEY}`;

const filmApi = async () => {
  try {
    const response = await axios.get(LinkApi);
    const movieList = response.data.results.slice(0, 12); // Obtener las primeras 12 películas
    return movieList.map(film => ({
      id: film.id,
      image: film.poster_path,
      title: film.original_title,
      genres: film.genres,
      year: film.release_date,
      language: film.original_language,
      overview: film.overview,
      created: false,
    }));
  } catch (error) {
    console.error('Error al obtener películas:', error.message);
    return [];
  }
};

//getMovies().then(movieOptions => {
//  console.log(movieOptions);
//});


//muestra de acuerdo al id en api y bdd
const getUserById = async (id, source) => {
  const urlData = (await axios.get(LinkApi)).data;
  if (source === "api") {
    const apiFiltrada = urlData.filter(ele => ele.id === Number(id));
    const nuevo = {
          id: apiFiltrada[0].id,
          name: apiFiltrada[0].name,
          height: apiFiltrada[0].height.metric,
          weight: apiFiltrada[0].weight.metric,
          life_span: apiFiltrada[0].life_span,
          image: apiFiltrada[0].image.url,
          created: false,
        };
        return nuevo;
  } else {
    return await Dogs.findByPk(id);
  }
};

// busca por nombre api y bdd
const searchDogByName = (name)=>{

}

//crea nuevo perro en dbb
const createNewFilm = async(title, year,language,overview, image, created) =>{
    if (title && year && language && overview && image) {
        return await Films.create({title, year,language,overview, image, created}) //el await es pq devuelve la promesa.
    }else{ throw new Error('Faltan datos')};
};

const putDbFilm = async (id, dataToUpdate) => {
  console.log("pasa por aqui", id);

   
    try {
      const movie = await Films.findByPk(id);
      if (!movie) {
        return 'Movie not found';
      }
      if (dataToUpdate.title) {
        movie.title = dataToUpdate.title;
      }
      if (dataToUpdate.year) {
        movie.year = dataToUpdate.year;
      }
      if (dataToUpdate.language) {
        movie.language = dataToUpdate.language;
      }
      if (dataToUpdate.overview) {
        movie.overview = dataToUpdate.overview;
      }
      await movie.save()
      return 'Movie updated successfully';
    } catch (error) {
      console.error('Error updating movie:', error);
      throw error; // Relanza el error para que pueda ser manejado en el handler
    }
    
}




//muestra todos los perros de api y bdd 
const getAllDogs = async() => {
  const dataBaseDogs = await Dogs.findAll();
  const apiDogsRaw = (await axios.get(LinkApi)).data;
     
  const cleanArray = (arr) => arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      height: elem.height,
      weight: elem.weight,
      life_span: elem.life_span,
      image: elem.image,
      temperament: elem.temperament
    };
 });
 
  const apiDogs = cleanArray(apiDogsRaw);   
  return [...dataBaseDogs, ...apiDogs];
};



module.exports = {putDbFilm, filmApi, getUserById, createNewFilm, searchDogByName, getAllDogs};