// app/service/user.js
const Service = require('egg').Service;

class StudentService extends Service {
    async index() {
        const student = await this.app.mysql.select('students');
        return student;
    }
    async add(data) {
        const student = await this.app.mysql.insert('students', data);
        console.log(student);
        return student;
    }
}

module.exports = StudentService;
