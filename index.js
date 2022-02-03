function receivesAFunction(cb){
    cb()
}

function returnsANamedFunction(){
    const output = x => x * x
    return output;

}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("xd")
    };
}