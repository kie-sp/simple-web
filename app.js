const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/user/:id', function (req, res) {
    var user = {name: 'Nok Sithisak'};

    res.send(JSON.stringify(user));
});
app.listen(3000, () => console.log('list on 3000'));