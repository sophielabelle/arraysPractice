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
