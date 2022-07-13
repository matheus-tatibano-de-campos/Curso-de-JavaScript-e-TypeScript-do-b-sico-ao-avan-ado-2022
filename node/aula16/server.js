require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.connectionstring, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'aki vai oq ngm sabe()',
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://8577636:8577636@cluster0.6qrmk.mongodb.net/?retryWrites=true&w=majority  ' }),
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);





app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('acessar http://localhost:3000');
        console.log('servidor executando na porta 3000');
    });
});
