const http = require('http');
const fs = require('fs');
const path = './students.json';

function readStudentFile() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}
function writeStudentFile(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
 
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/students' && req.method === 'GET') {
   
    const students = readStudentFile();
    res.end(JSON.stringify(students));

  } else if (req.url === '/students' && req.method === 'POST') {
    
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const newStudent = JSON.parse(body);
      const students = readStudentFile();
      students.push(newStudent);
      writeStudentFile(students);
      res.statusCode = 201;
      res.end(JSON.stringify({ message: 'Student added successfully' }));
    });

  } else if (req.url.startsWith('/students/') && req.method === 'PUT') {
    
    const id = parseInt(req.url.split('/')[2]);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const updatedStudent = JSON.parse(body);
      const students = readStudentFile();
      const index = students.findIndex(student => student.id === id);

      if (index !== -1) {
        students[index] = { ...students[index], ...updatedStudent };
        writeStudentFile(students);
        res.end(JSON.stringify({ message: 'Student updated successfully' }));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Student not found' }));
      }
    });

  } else if (req.url.startsWith('/students/') && req.method === 'DELETE') {
    
    const id = parseInt(req.url.split('/')[2]);
    const students = readStudentFile();
    const filteredStudents = students.filter(student => student.id !== id);

    if (students.length !== filteredStudents.length) {
      writeStudentFile(filteredStudents);
      res.end(JSON.stringify({ message: 'Student deleted successfully' }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Student not found' }));
    }

  } else {
    
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

/*
Instructions for Postman Testing:
1. GET all students: 
   - Method: GET
   - URL: http://localhost:3000/students

2. POST a new student: 
   - Method: POST
   - URL: http://localhost:3000/students
   - Body (JSON): { "id": 1, "name": "John Doe", "age": 20 }

3. PUT update a student:
   - Method: PUT
   - URL: http://localhost:3000/students/1
   - Body (JSON): { "name": "Jane Doe", "age": 21 }

4. DELETE a student:
   - Method: DELETE
   - URL: http://localhost:3000/students/1
*/