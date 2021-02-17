let express = require("express");
let app = express();

app.get('/api', (req, res) => {
  
    res.json([
        {
            id: 1, 
            name: 'Joe'
        },
        {
            id: 2,
            name: 'Adam'
        },
        {
            id: 3,
            name: 'Cedael'
        },
        {
            id: 4, 
            name: 'Kim'
        }

    ])
})

app.listen(3005, () => {
  console.log(`listening on port 3005`);
});
