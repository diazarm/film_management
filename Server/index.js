const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = 3001;

server.listen(PORT, ()=> {
  conn.sync({ altern : true }); //alter (es como refresh) - force
  console.log(`Listening on port ${PORT}`);
});