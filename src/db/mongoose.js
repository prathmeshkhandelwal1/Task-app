const mongooose = require('mongoose')
const validator = require('validator')

mongooose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true
})


