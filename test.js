let promise = new Promise(function (resolve){
    console.log('first');
    resolve();
    console.log('second');
}).then(function(){
    console.log('third');
})

console.log(promise);