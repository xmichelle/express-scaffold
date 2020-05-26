const express = require('express');
const app = express();
const path = require('path');
const port = 3300;

const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

// app.get('/', (req, res) => res.send('Howdy World!'));

app.listen(port, () => {console.log(`we are listening to port ${port}`)});
