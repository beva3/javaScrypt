let olona = {
    name: 'raphael',
    age : 18,
    email: 'raphael@gmail.com',

    print_info: function() {
        console.log(`NAME   : ${olona.name}`);
        console.log(`EMAIL  : ${this.email}`);
        console.log(`age    : ${this.age}`);
    }
}

function property(Object){
    for(let property in Object){
        console.log('================================');
        console.log(` property   : ${property}`);
        console.log(` typeof     : ${typeof(Object[property])}`);
        console.log(` valeur     : ${Object.property}`);
        console.log('--------------------------------');
    }
}

olona.print_info();
property(olona);
