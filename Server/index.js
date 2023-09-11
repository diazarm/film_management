const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const {app} = require('../Server/src/app.js')

const PORT = 3001;

server.listen(PORT, ()=> {
  conn.sync({ alter : true }); //alter (es como refresh) - force
  console.log(`Listening on port ${PORT}`);
});