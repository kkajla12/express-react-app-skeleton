const express = require('express');
const app = express();
const path = require('path');
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

app.get('/', (req, res) => {
   res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(3000, () => console.log('App listening on port 3000'));
