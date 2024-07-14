//identifying major page content
const login = document.getElementById('login')
const register = document.getElementById('register')
const home = document.querySelector('main')
const booking = document.getElementById('booking-form')

//additional variables
const btnBook = document.querySelector(".btn")
const btnLogin = document.getElementById('btnLogin')
const btnRegister = document.getElementById('btnRegister')


// onload default


//instances
btnBook.onclick = () => {
    login.style.display = 'none';
    register.style.display = 'none';
    home.style.display = 'none';
    booking.style.display = 'block';
};

btnLogin.onclick = () => {
    home.style.display = 'none';
    booking.style.display = 'none';
    register.style.display = 'none';
    login.style.display = 'block';

};

btnRegister.onclick = () => {
    home.style.display = 'none';
    login.style.display = 'none';
    booking.style.display = 'none';
    register.style.display = 'block';
};


//initializing submission processes
