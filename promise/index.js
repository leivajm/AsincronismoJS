const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true)
        {
            resolve('Hey!');
        }
        else{
            reject('Whoops!!');
        }
    });
};

somethingWillHappen()
    .then(Response => console.log(Response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        }
        else{
            const error = new Error('Whooooop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(Response => console.log(Response))
.then(()=> console.log('hola'))
.catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(Response => {
    console.log('Arreglo de resultados ', Response);
})
.catch(err => {
    console.error(err);
})