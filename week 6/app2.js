//object constructors 

function js(firstname,lastname,age,email){

    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.email=email;
}

js.prototype.getFullname=function(){
    return this.firstname + " " + this.lastname;
}
const name="sharon";

function call(){
    console.log(name)

}
call();

const sharon=new js("sharon","nyamogo",19,"sharon@gmail.com");
const lewis=new js("lewis","machabe",27,"lewis@gmail.com");

console.log(sharon);
console.log(lewis);

const jsArr=[sharon,lewis]

console.log(jsArr);

//object prototypes
