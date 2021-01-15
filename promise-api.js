// const p = Promise.reject(new Error('Reason'));
// p.catch(err => console.log(err))

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('1')
       resolve(1);
       
    }, 2000)
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('2')
       resolve(2);
       
    }, 2000)
});

Promise.race([p1, p2])
    .then(result=>console.log(result))
    .catch(err => console.log(err.message))