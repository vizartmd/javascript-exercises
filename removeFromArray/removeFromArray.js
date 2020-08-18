const removeFromArray = function(arr, ...args) {
    for(let j = 0; j < args.length; j++) {
        for( var i = 0; i < arr.length; i++){ 
            if ( arr[i] === args[j]) { 
                arr.splice(i, 1); 
            }
        }
    }
     return arr;
}

module.exports = removeFromArray
