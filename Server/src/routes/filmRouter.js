const {Router} = require('express');
const  {getFilmHandler,deleteIdHandler, 
        getNameHandler, postFilmHandler
       } = require('../handlers/filmGetHandler');
//const { filmApi } = require('../controllers/getController');

const filmRouter = Router();


filmRouter.get("/", getFilmHandler);

filmRouter.get("/name", getNameHandler);

filmRouter.delete("/:id", deleteIdHandler);

filmRouter.post("/", postFilmHandler); 




module.exports = filmRouter;