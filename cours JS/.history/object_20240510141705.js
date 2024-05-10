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
olona.print_info();
function
for(let tproperty in olona){
    console.log(`property : ${tproperty}`);
}