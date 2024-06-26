const mongoose =  require('mongoose')
let { Schema } = mongoose

let conn;
try {
    let domain = 'mongodb+srv://'
    let username = "globiz"
    let password = "globiz"
    let host = "@cluster0.lbgxc4q.mongodb.net"
    let db = "basic"

    conn =  mongoose.createConnection(`${domain}${username}:${password}${host}/${db}`)
    console.log(" Connected ")
} catch (error) {
    console.log(error)
}

let students = new Schema({
    name:String,
    class:String,
    rollno:Number
})

let studentsModel = conn.model("students",students)

let saveData = (studentsModel) => {
    let firstDocument = new studentsModel()

    firstDocument.name = " ABC ";
    firstDocument.class = "BCA ";
    firstDocument.rollno = 123;
    firstDocument.save()
}

let getData = async (studentsModel) => {
    // let data = studentsModel.findOne({
    //     rollno:123
    // }).then((e) => {
    //     console.log(e)
    // })

    let data = studentsModel.findById('667b67c8c276cb648096e923').then((e) => {
        console.log(e)
    })
    console.log(data,"data")
}

getData(studentsModel)
saveData(studentsModel)