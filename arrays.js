var studentNames = ["James", "Ellie", "Tom", "Sadie"];
var studentsHeight = [67, 57, 75, 69];
var studentCompleteAssignments = [true, false, true, true];

// Using .pop removes the last element in a array.
studentNames.pop();
console.log(studentNames);

// Using .push adds a new element to the end of an array.
studentsHeight.push(47);
console.log(studentsHeight);

// Using .shift removes the first element of an array and returens its
studentCompleteAssignments.shift();
console.log(studentCompleteAssignments);

// Index positions are the locations of each element in and array. They start with 0 and go up from there. So with a array with 5 elements their index positions would be 0, 1, 2, 3, and 4. 