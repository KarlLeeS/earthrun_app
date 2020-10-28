
const fakeQuery=(ms)=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log("Query OK"); 
            resolve();        
        })
    }, ms)
};

export default fakeQuery;