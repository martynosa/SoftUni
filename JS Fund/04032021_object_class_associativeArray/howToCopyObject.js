function objectsDemo(){

    let cat = {
        name: `Lory`,
        age: 5,
        color: `black`
        
    }

    let cat2 = {      //copy of an object
        ...cat
    }
    console.log(cat2);
    
}
objectsDemo();