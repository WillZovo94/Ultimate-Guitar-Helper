const express = require('express'); 
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`)
})