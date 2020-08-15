require('./db/mongoose');
const Task = require('./models/Task')


// // Task.findByIdAndDelete('5f273cdfe6ac580b90065f2d').then(result=>{
// //     console.log(result)
// //     return Task.countDocuments({completed:false})
// // }).then(task=>{
// //     console.log(task)
// // }).catch(e=>{
// //     console.log(e)
// // })

const deleteTaskAccount = async (id,bool) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:bool})
    return count
}

deleteTaskAccount('5f26a2b37c42cc2a4844fde5',false).then(result=>{
    console.log(result)
}).catch(e=>{
    console.log(e)
})