const express = require("express");
const app = express();
const path =  require("path");
const PORT = process.env.PORT || 3000;
const cors =  require("cors");

app.use(express.json());
const connectDb = require("./Config/db.");
connectDb();


const corsOptions = {
    origin : process.env.ALLOWED_CLIENTS.split(',')

}
app.use(cors(cors(corsOptions)));


app.use(express.static('public'));
console.log();
app.set()
app.set('view engine', 'ejs');
console.log(path.join(__dirname,'./views'));
app.set('views', path.join(__dirname, './views'));

app.use('/api/files', require('./routes/files'));

app.use("/files",require("./routes/show"))

app.use("/files/download", require("./routes/download"));

 app.listen(PORT, ()=>{
    console.log(`Listening to Port : ${PORT}`);
})