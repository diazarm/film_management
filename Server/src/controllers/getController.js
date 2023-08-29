const axios = require ('axios');
const {Dogs, Temperaments} = require ('../db');
const {API_KEY} = process.env;
const fs = require('fs');
const LinkApi = `https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`;


//muestra el perro de la api de a cuerdo a las caract
const raceDogApi = async () =>{
    const raceDog =  (await axios.get(LinkApi)).data;
    return raceDog.map(race => (
        {id:race.id, 
        image:race.image.url, 
        name:race.name, 
        height:race.height.metric, 
        weight: race.weight.metric, 
        life_span: race.life_span,
        temperament: race.temperament,
        created:false  }));
};

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
const createNewDog = async(name, height, weight, life_span,image, created) =>{
    if (name && height && weight && life_span &&image) {
        return await Dogs.create({name, height, weight, life_span,image,created}) //el await es pq devuelve la promesa.
    }else{ throw new Error('Faltan datos')};
};



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



module.exports = {raceDogApi, getUserById, createNewDog, searchDogByName, getAllDogs};