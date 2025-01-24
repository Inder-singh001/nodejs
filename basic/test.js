const test = (a) => {
    // console.log("yes TEST")
    let add = (a, b) => {
        return a+b
    }

    return {
        "test_value":"yes test",
        a:a,
        add:add
    } 
}

module.exports = test ;
// module.exports = "YES" ;

// module.exports = {
//     test:test
// } ;

// module.exports = () => {


//     let news = () => {

//     }

//     return {
//         news
//     }
// }

