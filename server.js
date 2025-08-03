const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Booxi backend running'));
app.listen(3001);