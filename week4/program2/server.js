const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = 3000;
const FILE_PATH = 'employees.json';

app.use(express.json());
const getEmployeesFromFile = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        return [];
    }
};
const writeEmployeesToFile = async (employees) => {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(employees, null, 2));
        return true;
    } catch (err) {
        return false;
    }
};
app.get('/getEmployees',async (req, res) => {
    const employees = await getEmployeesFromFile();
    res.json({ message:"Employees fetched successfully", data:employees });
});
app.post("/createEmployee", async (req, res) => {
    const employees = await getEmployeesFromFile();
    const newEmployee = req.body;
    newEmployee.id = employees.length ? employees[employees.length - 1].id + 1 : 1;
    employees.push(newEmployee);
    await writeEmployeesToFile(employees);
    res.json({ message: "Employee added successfully", data: newEmployee });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
