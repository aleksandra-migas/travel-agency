const burgerButton = document.getElementsByClassName('burger-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});

/*window.addEventListener('scroll', (event) => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});*/

//------------------CONTACT PAGE------------------


const sendButton = document.getElementById('sendButton').addEventListener('click', send);
const form = document.getElementById('form');

function send(event) {
    event.preventDefault();


const name = document.getElementById('name').value;
const surname = document.getElementById('surname').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
//const error = document.getElementById('error');

if (name == "") {
 //   error.innerText = "Enter your name";
 alert("Enter your name")
    return false;
}

if (surname == "") {
    //error.innerText = "Enter your surname";
    alert("Enter your surname")
    return false
}

if (email == "") {
//    error.innerText = "Enter your email";
alert("Enter your email")
   return false
}else {
   var re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (!re.test(email)) {
//        error.innerText = "Email format invalid";
alert("Email format invalid")
      return false;
   }
}

if (message == "" || message < 1 ) {
//    error.innerText = "Text area cannot be empty"
alert("Text area cannot be empty")
   return false
}

form.submit();

}

//------------------FAQ PAGE-----------------------------------
/*const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}*/

