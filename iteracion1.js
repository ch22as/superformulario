'use strict';

let btn = document.querySelector('#btn');
let name, surname, age, gender, dni, email, texarea, select;

function validate(name, surname, age, gender, email, texarea, select){

    if(name != undefined && surname != undefined && age > 0 && gender != undefined && email != undefined && texarea != undefined && select != undefined ){
        if( age > 18){
            if( dni != undefined){
                if(email =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ){
                    return true
                }
                return 'Email no válido'
            }
            return 'DNI no válido'+dni
        }
        return 'La edad debe ser mayor a 18 años'
    }

    if(name == undefined || surname == undefined || age <= 0 ){
        if( name == undefined){
            return 'nombre undefined'+name
        }
        return ' name to age'
    }
    if( gender != undefined && email != undefined && texarea != undefined && select != undefined ){
        return 'gender to select'
    }
    return 'campo no valido'
};



function send (){
    name = document.querySelector('#name').value;
    surname = document.querySelector('#surname').value;
    age = document.querySelector('#age').value;
    document.querySelectorAll("#gender").forEach(gen =>{if(gen.checked){
        gender = gen.value;
    }});
    dni = document.querySelector('#dni').value
    email = document.querySelector('#email').value;
    texarea = document.querySelector('#textarea').value;
    select = document.querySelector('#select').value;
    let createForm = 'Christian Martin';
 
    let valid = validate(name, surname, age, gender, dni, email, texarea, select);
    if(valid != true){
        console.log(valid)
        return
    }

    alert(`${name}, ${surname}, ${age}, ${gender}, ${email}, ${texarea}, ${select}, ${createForm}`);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'controller.php', true);
    xhr.send({name, surname, age, gender, email, texarea, select, createForm});
    location.reload();
};

btn.addEventListener('click', function(event){
    event.preventDefault();
    send();
});