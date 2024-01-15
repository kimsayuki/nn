let marks_class_12 = [91, 82, 63, 84, null, "Not Present"]
console.log(marks_class_12);
marks_class_12[6] = 78
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log("The length of marks_class_12 is", marks_class_12.length);
marks_class_12[6] = 89      //  changes from here
marks_class_12[0] = 96
console.log(marks_class_12);
console.log(typeof marks_class_12);

// Arrays are mutedable they can changed but Strings are immuteable they cannot changed