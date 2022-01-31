const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// const express = require('express');
// const server = express();
// server.get((req, res) => {
//   res.send('prueba tomi');
// })
// server.listen(3001, () => {
//   console.log('Server running on port 3001');
// });

const port = process.env.PORT || 3001;

conn.sync({ force: true}).then(() => {// force true borra bd c/vez q levanto el back y cierrols
  server.listen(port, () => {
    console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`); // eslint-disable-line no-console
  });
}).catch((e) => console.log("connection failed", e));