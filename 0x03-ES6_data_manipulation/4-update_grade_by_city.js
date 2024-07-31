export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const studentGrade = newGrades.find((grade) =>
                grade.studentId === student.id) || defaultGrade;
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: studentGrade.grade,
        };
      });
  }
  return [];
}
