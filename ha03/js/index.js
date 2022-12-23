
// Aufgabe 3.1.1
function notGoodGrades(grades) {
  return grades
    // TODO: implement me
}

// Aufgabe 3.1.2
function gradeOverview(students, grades) {
  return students
    // TODO: implement me
}

// Aufgabe 3.1.3
function duplicateStudents(students) {
  var doppelt = []
    students.reduce()

  return students
    // TODO: implement me
}

// Aufgabe 3.1.4
function invalidGrades(grades) {
  return grades
    .map((s) => {
      // TODO: implement me

      return {
        matrikelnummer: -1 /* TODO: replace */,
        grades: [] /* TODO: replace */,
      };
    })
    .filter((e) => e.grades.length > 0)
}
