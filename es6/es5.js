let user = {
    firstName: "Foo",
    age: 33,
    friends: ["Bar", "Bam","Baz"],
    address:{
        street: "201 Main Road",
        city: "Noida"
    }
}

const {firstName:fn, age,friends:[f1,f2,f3],address:{street:st,city:ct}} = user;

console.log(fn,age,f1,f2,f3,st,ct);
