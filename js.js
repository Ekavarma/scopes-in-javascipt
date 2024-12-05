var a1="vamsi"
console.log(a1)
//these variables are accessed in global scope
function c(){
    var a2=123
    let b2=456
    const c2=786
    function d(){
        var a3="syntax"
        let a4="error"
        const a5="uncaught"
    }
    d()
}
c()
//these variables are stored in the local scopes



let a="kiran"
const b="satish"
console.log(a,b)
//these is variables are stored in script scopes

{
    var d1="dfnjdk"
    const d2="iunve"
    let d3="ovvjkvf"
}
console.log(d1,d2,d3)
//these are variables are accessed in block except with var declaration