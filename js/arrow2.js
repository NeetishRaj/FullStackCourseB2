class Class_1 {
    foo = "I am in Class_1"

    bar () {
        console.log(this.foo);
    }
}




class Class_2 {
    foo = "I am in Class_2"

    bar = () => {
        console.log(this.foo);
    }
}



let c1 = new Class_1();
c1.bar();


let c2 = new Class_2();
c2.bar();