'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/student/list', controller.student.list);
    router.get('/student/getstudent/:id', controller.student.getstudent);
    router.delete('/student/deletestudent/:id', controller.student.deletestudent);
    router.post('/student/addstudent', controller.student.addstudent);
};
