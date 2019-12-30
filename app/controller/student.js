'use strict';

const Controller = require('egg').Controller;

class StudentController extends Controller {
    async list() {
        const {ctx} = this;
        const student = await ctx.service.student.index();
        console.log(student);
        ctx.body = student;
    }
    async getstudent() {
        const {ctx} = this;
        console.log(ctx.params);
        ctx.body = [{id: ctx.params.id, name: 'zs', age: 12}];
    }
    async deletestudent() {
        const {ctx} = this;
        console.log(ctx.params);
        ctx.body = '删除成功';
    }
    async addstudent() {
        const {ctx} = this;
        const res = await ctx.service.student.add(ctx.request.body);
        console.log(ctx.request.body, res);
        ctx.body = '添加成功';
    }
}

module.exports = StudentController;
