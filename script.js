//Account objects

let account1 = {
    userName: 'AB',
    PIN: 1111,
}

let account2 = {
    userName: 'CD',
    PIN: 2222,
}

//Selection
const inputLoginUsername = document.querySelector('.login_username');
const inputLoginPin = document.querySelector('.login_pin');
const loginButton = document.querySelector('.login_btn');
const core = document.querySelector('.main_section');
const navigation = document.querySelector('.nav');
const header = document.querySelector('h1');
const labelWelcome = document.querySelector('.welcome');
const logo = document.querySelector('.nav_logo');
const email = document.querySelector('.inp');
const email_button = document.querySelector('.dropbtn');
const feeling_selection = document.querySelector('.dropdown');
const logOut = document.querySelector('.login_form');


//Core page
const corePage = function () {
    core.classList.remove('opacity');
    loginButton.classList.add('opacity');
    inputLoginPin.classList.add('opacity');
    inputLoginUsername.classList.add('opacity');
    header.classList.add('opacity');
    logo.classList.add('opacity');
    logOut.insertAdjacentHTML('beforeend', '<button style="background-color:#BCCC9A" >Log out</button>');
}

//Validate correct username and PIN

loginButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (account1.userName === inputLoginUsername.value && account1.PIN === Number(inputLoginPin.value)) {
        corePage();
    }
    if (account2.userName === inputLoginUsername.value && account2.PIN === Number(inputLoginPin.value)) {
        corePage();
    }
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    labelWelcome.textContent = 'Welcome back!'
})

//Fetch email address

email_button.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        const emailAddress = email_button.value;
        console.log(emailAddress);
        email_button.value = '';
    }

})

//Fetch the feeling using event delegation
//Step 1: Add event listener to a common parent
//Step 2: Find the target class you are interested in, and get the value out of it

feeling_selection.addEventListener('click', function (e) {

    if (e.target.classList.contains('a')) {
        const feeling = e.target.innerHTML;
        console.log(feeling);
    }
})










