function delay(ms){
    if (ms <= 0 ){
       return  Promise.resolve(`${ms} should be positive`)
    }
    return new Promise(resolve => {
        setTimeout(()=> resolve(`waited ${ms}ms`), ms);
    });
}

delay( 1000).then(message => console.log(message));