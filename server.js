const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/express_backend', (req, res) => {
  console.log(req.body);
  res.send(`Thank you for your interest, ${req.body.name}`); 
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});
