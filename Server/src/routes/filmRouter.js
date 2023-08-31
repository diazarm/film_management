const {Router} = require('express');
const  {getFilmHandler,deleteIdHandler, 
        putIdHandler, postFilmHandler
       } = require('../handlers/filmGetHandler');
//const { filmApi } = require('../controllers/getController');

const filmRouter = Router();


filmRouter.get("/", getFilmHandler);

filmRouter.put("/:id", putIdHandler);

filmRouter.delete("/:id", deleteIdHandler);

filmRouter.post("/", postFilmHandler); 




module.exports = filmRouter;