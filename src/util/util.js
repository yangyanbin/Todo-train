//util.js
const appTitle = "React quick start!!";
function isEmpty(str){
    if(str){
        return true;
    }
    return false;
}
export function isString(str){
    if(typeof str === "string"){
        return true;
    }
    return false;
}

export default appTitle;
export {isEmpty};

/* for(var i=1;i<4;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000)
} */
/* for(let i=1;i<4;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000)
} */

/* const word = "ES6";
console.log("Welcome to "+word);
console.log("<h1 class='colorRed'>"+word+"</h1>");
console.log(`Welcome to ${word}`);
console.log(`<h1 class='colorRed'>${word}</h1>`); */

/* const obj = {
    key1:1,
    key2:2,
    key3:3
}
const {key1,...rest} = obj;
const newObj = {...obj};
const {key4=4} = obj;
console.log(key1,rest);
console.log(newObj);
console.log(key4);

const arr = [4,5,6]
const [start,...restArr] = arr;
console.log(start,restArr); */

/* const obj = [
    {name:'lilei',age:'11'},
    {name:'hanmeimei',age:'12'}
]
for(let {name,age} of obj){
    console.log(name,age);
} */

/* const params = {
    url:'/api/url',
    type:'post'
};
const testFun = ({url,type='get'})=>{
    console.log(url,type);
}
testFun(params); */