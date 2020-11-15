const express = require('express');
const bodyParser = require('body-Parser');



const app = express();
app.set('port', process.env.PORT || 8001);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : true} ));

app.get('/api/hello' ,  (req, res) => {
    res.send({message: "Hello Express!"});
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });
  