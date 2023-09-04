const {Router} = require('express');
const  {getFilmHandler,deleteIdHandler, 
        putIdHandler, postFilmHandler, getIdFilmHandler
       } = require('../handlers/filmGetHandler');

const filmRouter = Router();


filmRouter.post("/", postFilmHandler); 

filmRouter.get("/", getFilmHandler);

filmRouter.get("/:id", getIdFilmHandler);

filmRouter.put("/:id", putIdHandler);

filmRouter.delete("/:id", deleteIdHandler);




module.exports = filmRouter;