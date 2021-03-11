const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const port = 2000;
const mongoose = require('mongoose');
const morgan = require('morgan')

const usersRoute = require('./routes/users.routes')
const productRoute = require('./routes/products.routes')
const adminRoute = require('./routes/admin.routes')
const authRoute = require('./routes/auth.routes')

app.set("view engine", "pug");
app.set("/views", "./views");

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use(cookieParser())




mongoose
.connect('mongodb://localhost:27017/QuanLySanPham', {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {console.log("Connected DB");})

app.use('/', adminRoute);
app.use('/', usersRoute);
app.use('/', productRoute);
app.use('/', authRoute);

app.listen(port, function () {
    console.log("app listen on port http://localhost:" + port);
})
