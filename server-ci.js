var express = require('express');
var app = express();
app.use(express.static('dist'));
app.listen(8000, () => console.log('server-ci running on port: 8000'));
