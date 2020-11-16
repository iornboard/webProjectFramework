const express = require('express');
const bodyParser = require('body-Parser');
const dotenv = require('dotenv');

const app = express();
app.set('port', process.env.PORT || 5000);




const { sequelize } = require('./models'); 
dotenv.config();  

sequelize.sync({ force: false })  
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

const { Post } = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : true} ));


app.post('/api/customers', async  (req, res, next) => {
     await Post.create({  
      name: req.body.name,  
      birthday: req.body.birthday, 
      Num: 1,
      image : 'https://placeimg.com/64/64/any'
    });
})


app.get('/api/customers' , async  (req, res, next) => {

    const post = await Post.findAll();

    console.log(post);
    res.send(post);

});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });
  