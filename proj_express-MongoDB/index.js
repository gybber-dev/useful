const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const routers = require('./routes/todos.js');

const PORT = process.env.PORT||3000;

const app = express();
const hbs = exphbs.create({
  layoutsDir: 'views/layouts',
  defaultLayout: 'layout',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine) // задаем конфигурацию движка hbs, согласно
                              // параметрам перечисленным выше
app.set('view engine', 'hbs') // объявляем, что используем движок hbs
app.set('views', 'views'); // тут лежат наши представления (страницы)

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"))


app.use(routers);

async function start(){
  try {

    const url = 'mongodb+srv://0552632611:0552632611@cluster0-b8fmu.mongodb.net/collectionName';
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    app.listen(PORT, ()=>{
      console.log('Server has been started...');
    })

  } catch (e) {
    console.log('connection failed ', e);
  }
}

start();
