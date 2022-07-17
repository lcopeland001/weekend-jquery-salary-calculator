console.log('js');

$(document).ready(readyNow);

function readyNow(){
 console.log('ready now');
 $('#submit-button').on('click', submitButton);
 // event delegation
 $('body').on('click', '.delete-button', deleteButton)
} // end readyNow

let emplyeeInfo = [];

function deleteButton(){
    console.log('in deleteButton');
    let grandParent =$(this).parent().parent()
    grandParent.remove();
    grandParent.data(emplyeeInfo);
    
    console.log('this:', grandParent.data('.employee-salary'));
} // end deleteButton

function displayEmplyees(){
    console.log('in displayEmplyees');
    let el = $('#emplyee-table')
    el.empty();
    for (let employee of emplyeeInfo){
        el.append(`
        <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td class="employee-salary">${employee.annualSalary}</td>
        <td><button class="delete-button">DELETE</button>
        </tr>
        `)
    }
} // end displayEmplyees

function monthlyCost(){
    console.log('in monthlyCost');
    let totalAnnual = 0;
    for (let i = 0; i < emplyeeInfo.length; i++) {
       totalAnnual += Number(emplyeeInfo[i].annualSalary);
    }
    let totalMonthly = Math.round(100*totalAnnual/12)/100;
    let el = $('#total-monthly');
    el.empty();
    el.append('$'+ totalMonthly);

    if(totalMonthly > 20000){
        el.css('background-color', 'red');
    }
} // end monthlyCost

function submitButton(){
    console.log('in submitButton');
    let employee = {
        firstName: $('#first-name-input').val(),
        lastName:$('#last-name-input').val(),
        id: $('#id-input').val(),
        title: $('#title-input').val(),
        annualSalary: $('#annual-salary-input').val(),
    };
    emplyeeInfo.push(employee);
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');
    displayEmplyees();
    monthlyCost(); 
} // end submitButton