// const users = [
//   { id: 1, username: "alice", age: 25 },
//   { id: 2, username: "bob", age: 30 },
//   { id: 3, username: "carol", age: 22 },
//   { id: 4, username: "narol", age: 22 },
//   { id: 5, username: "walki", age: 45 },
//   { id: 6, username: "json", age: 13 },
// ];

// 1. Find a user
// Find the user whose username is "carol".
// const result = users.find((user) => user.username == "carol");
// console.log(result);

// 2. Filter users by age
// Get a new array of users who are older than 25.
// const result = users.filter(user => user.age>=25);
// console.log(result);

// 3. Sort users by age
// Sort the users from youngest to oldest.
// const result = users.sort((a,b)=>a.age-b.age);
// console.log(result);

// 4. Check for teens
// Is there any user younger than 18?
// const result = users.find(user=>user.age>18)
// console.log(result);

// 5. Check adult status
// Are all users 18 or older?
// const result = users.every(user => user.age>=18);
// console.log(result);

// 6. List usernames
// Create an array that only contains usernames.
// const result = users.map(user => user.username);
// console.log(result);

// 7. Average age
// Calculate the average age of all users.
// const result = users.reduce((acc,value,i,arr)=>(acc+value.age));
// const result2 = users.reduce((acc,obj)=>(acc+obj.age),0)
// // syntax    iterrater.reduce((acc,value)=>(acc+newValue),initialValue)
// console.log(result2);


// 8. Group by age
// Group users by their age — users with the same age should be in the same group.
// Example output:

// {
// 22: [ {…}, {…} ],
// 25: [ {…} ],
// // ...
// }

// 9. Find by ID
// Find the user with the id of 5.
// const result = users.find(user => user.id==5);
// console.log(result);

// 10. Remove a user
// Remove the user whose username is "json" from the array (return a new array).
// const result = users.filter(user => user.username!=='json');
// console.log(result);
