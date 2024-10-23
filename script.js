const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const emailAddress = document.getElementById('email-address')
const btnSubmit = document.getElementById('submit')
const radioBtn1 = document.getElementById('general-enquiry')
const radioBtn2 = document.getElementById('support-request')
const consentCheckBox = document.getElementById('consent-checkbox')
const inputFields = document.querySelectorAll('input');
const inputTags = document.querySelectorAll('input[type=text]')

function eventHandlerInput(eventElementName, className){

    eventElementName.addEventListener('focus', (e)=>{
        if(e.target.value == ""){
            document.querySelector(`.${className}`).style = 'visibility: visible'
        }
        else{
            document.querySelector(`.${className}`).style = 'visibility: hidden'
        }
    })
    eventElementName.addEventListener('input', (e)=>{
        if(e.target.value == ""){
            document.querySelector(`.${className}`).style = 'visibility: visible'
        }
        else if(eventElementName == emailAddress){
            if(!(emailAddress.value.includes("@gmail.com"))){
                document.querySelector(`.error-email`).style = 'visibility: visible'
                emailAddress.style = 'border-color: red;'
            }
            else{
                document.querySelector(`.error-email`).style = 'visibility: hidden'
                emailAddress.style = 'border-color: hsl(169, 82%, 27%)'
            }
        }
        else{
            document.querySelector(`.${className}`).style = 'visibility: hidden'
        }
    })
}

(function checkBoxEvent(){
    consentCheckBox.addEventListener('change', ()=>{
        if(consentCheckBox.checked){
            document.querySelector('.error-consent').style = "visibility : hidden"
        }
        else{
            document.querySelector('.error-consent').style = 'visibility: visible'
        }
    })
})();

(function radioEvent(){
    const radioBtns = document.querySelectorAll('input[type=radio]')

    radioBtns.forEach((element)=>{
        element.addEventListener('change', ()=>{
            if(radioBtn1.checked || radioBtn2.checked){
                document.querySelector(`.error-type`).style = 'visibility: hidden'
                radioBtn1.parentNode.style = 'border-color: hsl(186, 15%, 59%);'
                radioBtn2.parentNode.style = 'border-color: hsl(186, 15%, 59%);'
            }
            else{
                preventSubmit = true;
                document.querySelector(`.error-type`).style = 'visibility: visible'
                radioBtn1.parentNode.style = 'border-color: red;'
                radioBtn2.parentNode.style = 'border-color: red;'
            }
        })
    })
})();

(function submitHandler(){

    inputFields.forEach((element)=>{
        btnSubmit.addEventListener('click', ()=>{
            if(element.value === ''){
                if(element.id === 'firstname'){
                    document.querySelector(`.error-fname`).style = 'visibility: visible'
                    element.style = 'border-color: red;'
                }
                else if(element.id === 'lastname'){
                    document.querySelector(`.error-lname`).style = 'visibility: visible'
                    element.style = 'border-color: red;'
                }
                else if(element.id === 'email-address'){
                    document.querySelector(`.error-email`).style = 'visibility: visible'
                    element.style = 'border-color: red;'
                }

                if(consentCheckBox.checked){
                    document.querySelector('.error-consent').style = "visibility : hidden"
                }
                else{
                    document.querySelector('.error-consent').style = 'visibility: visible'
                }

                if(radioBtn1.checked || radioBtn2.checked){
                    document.querySelector(`.error-type`).style = 'visibility: hidden'
                    radioBtn1.parentNode.style = 'border-color: hsl(186, 15%, 59%);'
                    radioBtn2.parentNode.style = 'border-color: hsl(186, 15%, 59%);'
                }
                else{
                    preventSubmit = true;
                    document.querySelector(`.error-type`).style = 'visibility: visible'
                    radioBtn1.parentNode.style = 'border-color: red;'
                    radioBtn2.parentNode.style = 'border-color: red;'
                }
            }
        })
    })
})()

inputTags.forEach((element)=>{
    if (element.id == 'email-address') {
        
        console.log('hi');
    }
    element.addEventListener('focus', ()=>{
        if(element.value == ""){
            element.style = 'border-color: red;'
        }
        else{
            element.style = 'border-color: hsl(169, 82%, 27%)'
        }
    })
    element.addEventListener('input', ()=>{
        if(element.value == ""){
            element.style = 'border-color: red;'
        }
        else{
            element.style = 'border-color: hsl(169, 82%, 27%)'
        }
    })
})

eventHandlerInput(firstName, "error-fname");
eventHandlerInput(lastName, "error-lname");
eventHandlerInput(emailAddress, "error-email");



//Error of submit code........

// const firstName = document.getElementById('firstname')
// const lastName = document.getElementById('lastname')
// const emailAddress = document.getElementById('email-address')
// const btnSubmit = document.getElementById('submit')
// const radioBtn1 = document.getElementById('general-enquiry')
// const radioBtn2 = document.getElementById('support-request')
// const consentCheckBox = document.getElementById('consent-checkbox')
// var preventSubmit = false;

// function btnSubmitHandler(stop){
//     if(stop){
//         btnSubmit.addEventListener('click',(e)=>{
//             e.preventDefault();
//         })
//     }
// }

// function eventHandlerInput(eventElementName, className){

//     eventElementName.addEventListener('focus', (e)=>{
//         console.log("clicked");
//         if(e.target.value == ""){
//             preventSubmit = true;
//             document.querySelector(`.${className}`).style = 'visibility: visible'
//         }
//         else{
//             document.querySelector(`.${className}`).style = 'visibility: hidden'
//         }
//     })
//     eventElementName.addEventListener('input', (e)=>{
//         console.log("changed");
//         if(e.target.value == ""){
//             preventSubmit = true;
//             document.querySelector(`.${className}`).style = 'visibility: visible'
//             if(className === 'error-fname'){
//                 document.getElementById('firstname').style = 'border-color: red'
//             }
//         }
//         else{
//             document.querySelector(`.${className}`).style = 'visibility: hidden'
//         }
//     })
// }

// function eventHandlerRadio(){
//     btnSubmit.addEventListener('click', ()=>{
//         if(radioBtn1.checked || radioBtn2.checked){
//             document.querySelector(`.error-type`).style = 'visibility: hidden'
//         }
//         else{
//             preventSubmit = true;
//             document.querySelector(`.error-type`).style = 'visibility: visible'
//         }
//     })
// }

// function eventHandlerCheckBox(){
//     btnSubmit.addEventListener('click', ()=>{
//         if(consentCheckBox.checked){
//             document.querySelector('.error-consent').style = "visibility : hidden"
//         }
//         else{
//             preventSubmit = true;
//             document.querySelector('.error-consent').style = 'visibility: visible'
//         }
//     })
// }

// const inputTags = document.querySelectorAll('input[type=text]')

// inputTags.forEach((element)=>{
//     element.addEventListener('focus', ()=>{
//         if(element.value == ""){
//             element.style = 'border-color: red;'
//         }
//         else{
//             element.style = 'border-color: hsl(169, 82%, 27%)'
//         }
//     })
//     element.addEventListener('input', ()=>{
//         if(element.value == ""){
//             element.style = 'border-color: red;'
//         }
//         else{
//             element.style = 'border-color: hsl(169, 82%, 27%)'
//         }
//     })
// })

// eventHandlerInput(firstName, "error-fname");
// eventHandlerInput(lastName, "error-lname");
// eventHandlerInput(emailAddress, "error-email");
// eventHandlerRadio();
// eventHandlerCheckBox();
// btnSubmitHandler(preventSubmit);