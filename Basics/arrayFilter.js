// TODO tasks and pending tasks are buggy, fix it.
// filter() – Remove Elements Based on a Condition.
// The filter() method creates a new array containing only the elements that satisfy a condition.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenNums = numbers.filter(num => num % 2 ===0);
console.log(`Original array: ${numbers}`);
console.log(`Reduced array (contains only even numbers): ${evenNums}`);
/* 
 How filter() Works:
 Loops through each element.
 Checks if it satisfies the condition (in the example above, num % 2 === 0).
 Returns a new array containing only elements that pass the condition.
 */ 
const tasks = [
  { id: 101, tsk : "Learn React", completed: true },
  { id: 102, tsk : "Practice React / JS", completed: true },
  { id: 103, tsk : "Improve Everyday", completed: true},
  { id: 104, tsk : "Sleep well", completed: false},
  { id: 105, tsk : "Enjoy your life", completed: false}
]

const pendingTasks = tasks.filter(task => !task.completed);
console.log(`Pending tasks to do: ${pendingTasks}`);
