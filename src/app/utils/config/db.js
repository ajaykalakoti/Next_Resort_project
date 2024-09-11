const { default: mongoose } = require("mongoose")


const  DBconnection =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected Successfully");
    }catch(error){
        console.log("DB connection Error")
    }
}
export default DBconnection