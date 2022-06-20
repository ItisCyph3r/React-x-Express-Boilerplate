const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;
const host = '0.0.0.1';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());
app.set('view engine', 'ejs');

app
.route('/api')
.get((req, res) => {
    res.send('Connected to Node Backend')
})
.post((req, res) => {
    console.log('Connected to Reactjs')
})


app.listen(process.env.YOUR_PORT || process.env.PORT || port, () => {
    console.log('Listening to server on port ' + port)
})