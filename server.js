const express = require('express');
const bodyParser = require('body-Parser');
const dotenv = require('dotenv');

const app = express();
app.set('port', process.env.PORT || 5000);




const { sequelize } = require('./models'); 
dotenv.config();  // env 파일을 환경변수로 설정 

sequelize.sync({ force: false })  // force가 ture라면 데이터베이스를 삭세하고 쓸지
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

const { Post } = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : true} ));



app.post('/api/customers', async (req, res) =>{

})




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
  