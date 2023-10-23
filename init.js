
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthMouthOutput').innerText = initPerson.month;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    
   
    
};

window.clean = function()
{    
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText  = '';
    document.getElementById('patronymicOutput').innerText  = '';
    document.getElementById('birthMouthOutput').innerText  = '';
    document.getElementById('birthDayOutput').innerText  = '';
    document.getElementById('birthYearOutput').innerText  = '';
    document.getElementById('professionOutput').innerText  = '';
};

document.getElementById('btnStart').addEventListener('click', function(){window.onload();})


document.getElementById('btnClean').addEventListener('click', function(){window.clean()})


