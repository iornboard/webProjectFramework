const express = require('express');
const bodyParser = require('body-Parser');

const app = express();
app.set('port', process.env.PORT || 5000);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : true} ));

app.get('/api/customers' ,  (req, res) => {
    res.send([
            {
              'id' : 1,
              'name' : '남현수',
              'birthday' : '961106',
              'image' : 'https://placeimg.com/64/64/1'
            },
            {
              'id' : 2,
              'name' : '남현수1',
              'birthday' : '961106',
              'image' : 'https://placeimg.com/64/64/2'
            },
            {
              'id' : 3,
              'name' : '남현수2',
              'birthday' : '961106',
              'image' : 'https://placeimg.com/64/64/3'
            },
        ]);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });
  