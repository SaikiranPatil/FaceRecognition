const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const basePath = path.join(__dirname,"../public");

app.listen(port,() => {
    console.log(`Server started at PORT:${port}`);
})