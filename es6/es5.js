(function spread(){
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

//console.log(fn,age,f1,f2,f3,st,ct);

let users = [{name:'foo',age:32}]
let [{name:n1,age:a1}] = users;

//console.log(n1,a1);

let id = Symbol.for("arpit");
let id2 = Symbol.for("arpit");

const userx = {};
userx[id2] = "arpitxxx";
userx[id] = "gautam";
console.log(userx)
});

(function maps(){

    let question = new Map();
    question.set("12","twelve");
    question.set(12,"Twelvel");
    console.log(question);

    for(let [k,v] of question){
        console.log(k + v);
    }
});



(function range_via_iterator(){
    let rangeMaker = function(start,end=start+20,step=1){
        let reached = start-step;
        return{
        [Symbol.iterator](){
            return{
                next: function(){
                    reached += step;
                    let finished = reached >=end;
                   return {
                        done:finished,
                        value:reached
                    }
                }
            }
            return rangeMaker;
        }
    }
}
    for(let item of rangeMaker(1,10,2)){//strt,end,step
        console.log(item);
    }
});

(function generator(){
    function* rangeMaker(start,end,step){
        for(let i =start; i<end;i+=step){
            yield i;
        }
    }
 
    for(let item of rangeMaker(1,10,2)){
        console.log(item);
    }
});

(function classes(){

    class Person{
        constructor(){
            console.log("person");
        }
    };
    let p = new Person();
    Person.common = true;


})();

