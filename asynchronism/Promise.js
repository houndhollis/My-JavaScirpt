function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => π₯`);
}
function fryEgg(egg){
    return Promise.resolve(`${egg} => π³`);
}
function getChicken(){
    return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬μ μμ'))
    // return Promise.resolve(`πͺ => π`);
}
getChicken()
// .then((chicken)=> fetchEgg(chicken))
.catch(error => {
    console.log(error.name);
    return 'π';
})
.then(chicken => fetchEgg(chicken))
.then(egg => fryEgg(egg))
// .then((friedEgg)=>console.log(friedEgg))
.then(console.log)
