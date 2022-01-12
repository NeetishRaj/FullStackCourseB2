const object_1 = {
    foo: "I am in object 1",
    bar: function () {
        console.log(this.foo);
    }
}

const object_2 = {
    foo: "I am in object 2",
    bar: () => {
        console.log(this.foo);
    }
}



object_1.bar()
object_2.bar();

