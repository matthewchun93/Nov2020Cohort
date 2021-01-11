const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(require('./routes'));
app.use(require('./routes/aboutus'));


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})