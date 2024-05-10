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
    for(let tproperty in Object){
        
        console.log(` property : ${tproperty}`);
    }
}

olona.print_info();
property(olona);
