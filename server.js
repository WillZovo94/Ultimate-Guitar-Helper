const express = require('express');
const sessions = require('express-sessions');
 
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`)
})