const getListOfCourses = function(instructors) {
  let listOfCourses = [];
  let courseExist = false;
  for (const instructor of instructors) {
    for (const course of listOfCourses) {
      if (course === instructor.course) {
        courseExist = true;
        break;
      }
    }
    if (!courseExist) {
      listOfCourses.push(instructor.course);
    }

  }
  return listOfCourses;
}
const organizeInstructors = function(instructors) {
  // Put your solution here
  let result = {};
  let listOfCourses = getListOfCourses(instructors);
  for (const course of listOfCourses) {
    let listOfNames = [];
    for (const instructor of instructors) {
      if (course === instructor.course) {
        listOfNames.push(instructor.name);
      }
    }
    result[course] = listOfNames;
  }
  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));