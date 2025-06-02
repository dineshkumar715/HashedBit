const students = [
  {
    name: 'student1',
    subjects: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: 'student2',
    subjects: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: 'student3',
    subjects: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

const result = students.map(student => {
  const scores = Object.values(student.subjects);
  const sum = scores.reduce((acc, score) => acc + score, 0);
  const average = Math.round(sum / scores.length); 
  return { [student.name]: { average } };
});

console.log(result);