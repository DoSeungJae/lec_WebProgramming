
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello Wor111111111d</h1></body></html>');

});
app.post('/submit-data', function (req, res) {
    res.send('20220393 DSJPOST Request');
});
app.get('/test', function(req,res){
    res.send('<html><body><h1>TESt</h1></body></html>')
});
app.put('/update-data', function (req, res) {
    res.send('20220393 DSJ PUT Request');

});
app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});