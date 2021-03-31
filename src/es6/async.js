const sleep = (time) => {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve('promise resolve');
        },time*1000);
    });
}

const asyncFun = async () => {
    console.log('async start');
    // console.log(sleep(2));
    const res = await sleep(2);
    console.log(res);
    console.log('async end');
}

console.log('before')

asyncFun();

console.log('after')