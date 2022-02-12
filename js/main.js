'use strict';

let elResultContainer = document.querySelector('.resultHeadingg');
let elForm = document.querySelector('.groupInForm');
let elInputOne = document.querySelector('.input__valOne');
let elInputTwo = document.querySelector('.input__valTwo');
let elInputThree = document.querySelector('.input__valThree');
let elresultHeading = document.querySelector('h1')


elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    // Value
    let inputValueOne = elInputOne.value;
    let inputValueTwo = elInputTwo.value;
    let inputValueThree = elInputThree.value;

    elresultHeading.setAttribute('class', 'resultHeading');
    elresultHeading.textContent = 'Welcome to our little Site!';

    // Result Boxes
    let resultBoxOne = document.createElement('div');
    let resultBoxTwo = document.createElement('div');
    let resultBoxThree = document.createElement('div');
    elForm.appendChild(resultBoxOne);
    elForm.appendChild(resultBoxTwo);
    elForm.appendChild(resultBoxThree);
    resultBoxOne.setAttribute('class', 'resultBoxOne');
    resultBoxTwo.setAttribute('class', 'resultBoxTwo');
    resultBoxThree.setAttribute('class', 'resultBoxThree');

    // TextContent
    resultBoxOne.textContent = inputValueOne;
    resultBoxTwo.textContent = inputValueTwo;
    resultBoxThree.textContent = inputValueThree;
})