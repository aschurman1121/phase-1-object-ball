// function called gameObject

//contains and returns object {}

// target = value of the key that I am accessing
function gameObject (target)  {
    for ( let key in target ){
        if (typeof target[key] === 'array') {
            for ( let nestedKey in target[key]){
                console.log(target[key][nestedKey])
            }
        }else {
            console.log(target[key])
        }
    }
}



const numbers = [1, [2, [4, [5, [6]], 3]]]



// to do just one - not nested 

function example (target) {
    for (let key in target) {
        console.log(target[key]) //console logging the target at the key 
    }
}

function shallowIterator(target) {
    for (let key in target ){
        if ( typeof target[key] === 'array'){
            for (let nestedKey in target[key]){
                console.log(target[key][nestedkey])
            }
        } else {
            console.log(target[key])
        }
    }
}

console.log(shallowIterator(numbers)) 
