console.log('js');

$(document).ready(readyNow);

function readyNow(){
 console.log('ready now');
 $('#submitButton').on('click', submitButton);
} // end readyNow

let emplyeeInfo = [];

function submitButton(){
    console.log('in submitButton');
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName:$('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val(),
    };
    emplyeeInfo.push(employee);
} // end submitButton


