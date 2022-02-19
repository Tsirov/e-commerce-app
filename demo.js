// function foo() {
//     var variable1, variable2;

//     variable1 = 5;
//     varaible2 = 6;
//     console.log(variable1, variable2,varaible2);
//     return variable1 + variable2;
// }

// console.log( foo())
//  myVar = 100;

// function WhoIsThis() {
//     var myVar = 200;

//     // console.log(myVar); // 200
//     console.log(this.myVar); // 100
//     // console.log(this); // 100
// }


// var myVar = 100;

// function WhoIsThis() {
//     let myVar = 200;
//     console.log('1111');
// }
// var obj1 = new WhoIsThis();

// var obj2 = new WhoIsThis();
// obj2.myVar = 300;

// console.log(obj1); // 200
// console.log(obj1.myVar); // 200
// console.log(obj2.myVar); // 300



// function a() {
//     var i = 5;
//     var list = new Array(80);
//     add(i, list);
//     console.log(list.length * 2 + i);
//     console.log(list);
// }
// function add(x, l) {
//     l.push(++x);
// }
// a();
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4, 5]
function sum(arr1, arr2) {

    let newArray = new Set();

    for (let i of arr1) {
        newArray.add(i);
    }
    for (let i of arr2) {
        newArray.add(i);
    }
    let a = [];

    for (let i of newArray) {
        console.log('111',i);
        a.push(i)
    }

    console.log(a);
    console.log(typeof newArray);
    return newArray;
}
sum(arr1,arr2);



