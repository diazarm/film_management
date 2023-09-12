const {createNewUser, loginApi} = require('../controllers/userController')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
//const express = require('express');

//const app = require('../app');


const postUserHandler = async (req, res) => {
    try {
      const { user, password } = req.body;
      const newUser = await createNewUser(user, password);
      res.status(201).json(newUser); // Enviar el usuario recién creado en la respuesta
    } catch (error) {

      res.status(400).json({ error: error.message });
    }
  };
  
  const getUserHandler = async (req, res) => {
    try {
      const { user } = req.query;
      console.log("handl",user );
      const response = await loginApi(user); // Pasar el nombre como argumento
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

  const postLogHandler = async (req, res, key) => {
    try {
      console.log("esta es la key", key);
      const { user, password } = req.body;
      const response = await loginApi(user); // Pasar el nombre como argumento

      const match = await bcrypt.compare(password, response.password);
  
      console.log("match es:", match);
  
      if (match) {
        // Autenticación exitosa
        //res.json({ success: true, message: 'Autenticación exitosa' });
        const payload = {
          check : true
        };
        const token = jwt.sign(payload, key, {
          expiresIn: '1d'
        });
        res.json({ message: 'Autenticación exitosa',
                   token: token  
        });
      } else {
        // Autenticación fallida
        res.json({ success: false, message: 'Autenticación fallida' });
      }
    } catch (error) {
      console.error("Error en la comparación de contraseñas:", error); // Agrega esta línea para mostrar el mensaje de error
      res.status(400).json({ error: error.message });
    }
  };
  
  

module.exports = {postUserHandler, getUserHandler, postLogHandler}