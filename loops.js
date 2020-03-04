todos = [
    {
        id : 1,
        text: "take out the trash",
        iscompleted : false
    },
    {
        id : 2,
        text: "code for my future",
        iscompleted : true
    },
    {
        id : 3,
        text: "fuck yo bitch",
        iscompleted : true
    },
];
    
// for loop

// const i = [23,34,5,45,65,56,6,76,7,678,78,7,9];

for(let i = 0; todos < 11; i++) {
    console.log(`The For loop ${i}`);
};

// add a string with a number javascript
// console.log(`The For loop ${i}`);

let i = 1;
while(i < 10) {
    console.log(i);
    i++;
}

// for(let todo of todos){
//     console.log(todo);
// }

// mapping a array that takes in a fuction so you can console log the variable

// todos.forEach(todo => {
//     console.log(todo);
// });

// todos.forEach(function(todo){
//     console.log(todo.text);
// });


// const todoList = todos.map(function(todo){
//     return todo;
// });

// console.log(todoList);


// const todoLis = todos.filter(function(todo){
//     return todo.iscompleted === true;
// })

// console.log(todoLis);


var fucks = [34,4,65,6,7,67,6,78,7,87,9,8];

// for(let fuck of fucks){
//     console.log(fuck);
// }

// filtering the array fucks with a function with index of fuck and returning the index if it equals a number in it
const rannum = fucks.filter(indexoffucks =>{
    return indexoffucks === 6;
}).map(function(indexoffucks){
    return indexoffucks;
});

console.log(rannum);

// filtering the array and mapping inside of it;
const todoListy = todos.filter(function(todo){
    return todo.iscompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoListy);


// wrong callback

//  const lol = fucks.forEach(fuck =>{
//     return fuck;
// }).map(fuck =>{
//     return fuck === 6;
// });

// console.log(lol)

