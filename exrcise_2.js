const timeoutId = setTimeout(()=> console.log('time out after 4 seconds'), 4000 );

setTimeout(()=>{
    clearTimeout(timeoutId);
    console.log('canceled timeoutId after 2 seconds');
}, 2000)