let elResultContainer = document.querySelector('.resultHeadingg');
let elForm = document.querySelector('.groupInForm');
let elInput = document.querySelector('.input__val');


elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let inputValue = elInput.value;

    let resultHeading = document.createElement('h1');
    elResultContainer.appendChild(resultHeading);
    resultHeading.setAttribute('class', 'resultHeading');
    resultHeading.textContent = 'Welcome to our little Site!'

    let resultBox = document.createElement('div');
    elForm.appendChild(resultBox);
    resultBox.setAttribute('class', 'resultBox');

    resultBox.textContent = inputValue;
})