/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:async function(req,res){
        await Employee.find().then(function (employeeData) {
        return res.view('pages/employee/index',{
                status: 'OK',
                title: 'List of contacts',
                employees:employeeData
        });
    });
    },
    create:async function(req,res){
        var result= await Employee.create({fullName:'Finn',hourlyWage:'2 hours',phoneNumber:'1234433'}).fetch();
        return res.view('pages/employee/index',{
            status: 'OK',
            title: 'List of contacts',
            employees:result
    });
    },
};