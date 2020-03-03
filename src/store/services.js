export function ajax(params,delay=0){
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('success');
        },delay);
    });
    return promise;
}