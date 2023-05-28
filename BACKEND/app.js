const express=require('express')
const app=express()

const sequelize=require('./util/database')
const bodyParser=require('body-parser')
const cors=require('cors')
const expenseRoute=require('./routers/expenseRoute')
app.use(bodyParser.json())
app.use(cors())

app.use(expenseRoute)

app.use((req,res,next)=>{
    res.send('<h1>Page Not Found</h1>')
})

sequelize.sync().then((result) => {
    const hostname = '127.0.0.1';
    const port = 3000;
    app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
}).catch((err) => {
    console.log(err);
});
