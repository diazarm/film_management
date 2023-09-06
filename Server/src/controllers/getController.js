const { Films } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;

// Generar un número aleatorio entre 1 y 500 (ambos inclusive)
const randomPage = Math.floor(Math.random() * 500) + 1;

const LinkApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${randomPage}&api_key=${API_KEY}`;

const filmApi = async () => {
  try {
    // Obtener películas de la base de datos
    const dbMovies = await Films.findAll({
      limit: 12 
    });

    const response = await axios.get(LinkApi);
    const apiMovies = response.data.results.map(film => ({
      id: film.id,
      image: film.poster_path,
      title: film.original_title,
      genres: film.genres,
      year: film.release_date,
      language: film.original_language,
      overview: film.overview,
      created: false,
    }));
    
    // Combina las listas de películas, dando prioridad a las películas de la base de datos
    const combinedMovies = [...dbMovies, ...apiMovies];
    
    // Tomar las primeras 12 películas de la lista combinada
    const selectedMovies = combinedMovies.slice(0, 12);
    
    return selectedMovies;
  } catch (error) {
    console.error('Error al obtener películas:', error.message);
    return [];
  }
};

//muestra de acuerdo al id en api y bdd
const getIdController = async (id, source) => {
  const urlDataArray = [];
  const urlData = (await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)).data;
  urlDataArray.push(urlData)
  if (source === "api") {
    const newArray = urlDataArray.map(apiFiltrada => ({
      id: apiFiltrada.id,
      image: "https://image.tmdb.org/t/p/w500" + apiFiltrada.backdrop_path,
      name: apiFiltrada.original_title,
      name: apiFiltrada.title,
      year: apiFiltrada.release_date,
      language: apiFiltrada.original_language, // Cambiado a `original_language` en lugar de `language`
      overview: apiFiltrada.overview,
      created: false,
    }));
    return newArray[0];
  } else {
    return await Films.findByPk(id); 
  }
};



const createNewFilm = async(title, year,language,overview, image, created) =>{
    if (title && year && language && overview && image) {
        return await Films.create({title, year,language,overview, image, created}) //el await es pq devuelve la promesa.
    }else{ throw new Error('Faltan datos')};
};

const putDbFilm = async (id, dataToUpdate) => {
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







module.exports = {putDbFilm, filmApi, createNewFilm, getIdController};