const image = document.querySelectorAll('.product-lists li a'),
filterDiv = document.querySelectorAll('.filter-div'),
modal = document.querySelector('.product-modal'),
body = document.querySelector('body'),
content = document.querySelector('.content'),
closebtn = document.querySelector('.btn'),
html = document.querySelector('html'),
hamburger = document.querySelector('.hamburger'),
nav = document.querySelector('.menu-firstt'),
hambar = document.querySelectorAll('.bar'),
commonLi = document.querySelectorAll('.common-li'),
login = document.querySelector('.login-bnt'),
username = document.querySelector('.username'),
password = document.querySelector('.password'),
formField = document.querySelectorAll('.form-field'),
slideContainer = document.querySelector('.logo-slider'),
previousButton = document.querySelector('.previous'),
nextButton = document.querySelector('.next'),
indexPage = document.querySelector('.index-page'),
homePage = document.querySelector('.home-page'),
productsPage = document.querySelector('.products-page'),
sliderImage = document.querySelector('.slider-image'),
maxSliderValue = 60, minSliderValue = 0;



  //to avoid addeventlistner error validating pages before executing code 
if(indexPage){
    
        login.addEventListener('click' , (e) => {
            //prevent form submission
            e.preventDefault();
            usernameValue = username.value;
            passwordValue = password.value;
            checkDetails();
        })
        
        const checkDetails = () => {
            //check username and password match predefined set of values
            if(usernameValue === "AxionedUser" && passwordValue === "Axioned2023") {
                //redirect to home page
                window.location.href = "/home.html";
            }
            else {
                password.classList.add('error-field');
                username.classList.add('error-field');
                errorText = document.createElement("span");
                errorText.classList.add('.errortxt')
                errorText.innerText = "Invalid UserName or Password";
                formField.forEach(field => {
                    field.appendChild(errorText);
                })
            }
        }
}

  //to avoid addeventlistner error validating pages before executing code 
if(homePage || productsPage){
    //toggle nav and html scroll
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
        hambar[0].classList.toggle('active-first');
        hambar[1].classList.toggle('active-second');
        hambar[2].classList.toggle('active-third');
        html.classList.toggle('html-scroll');
    })
    
    //close nav on clicking element
    commonLi.forEach(li => {
        li.addEventListener('click', () => {
            nav.classList.remove('menu-active');
            html.classList.remove('html-scroll');
            hambar[0].classList.remove('active-first');
            hambar[1].classList.remove('active-second');
            hambar[2].classList.remove('active-third');
        })
    })
}
    
  //to avoid addeventlistner error validating pages before executing code     
if(homePage){
    let number = 0;
    previousButton.addEventListener('click', () => {
                
        if( number === 50 || number === 25){
            number += -25        
            sliderImage. style. transform=`translateX(-${ number}%)`;
        }     
        })
        
        nextButton.addEventListener('click', () => {
            if(number < maxSliderValue) {
                
                number+=25;
                console.log("numberin"+ number);
                sliderImage. style. transform=`translateX(-${number}%)`;
            }
        })

        //to change header background color
        var scrollTrigger = 500;

        window.onscroll = function() {
          if(window.scrollY >= scrollTrigger) {
            document.getElementsByTagName("header")[0].classList.add('bgr');
          } else {
            document.getElementsByTagName("header")[0].classList.remove('bgr');
          }
          }
}
    
    //to avoid addeventlistner error validating pages before executing code 
if(productsPage){
    //appending data to show value on modal and prevent page scroll
    image.forEach((img,index) => {
        img.addEventListener('click', ()=> {
            content.innerHTML=filterDiv[index].innerHTML;
            removeHidden();
            html.classList.add('html-scroll')
        })
    })
    
    //function to remove hidden class from modal
    function removeHidden() { modal.classList.remove('hidden') }
    
    // close modal on clicking close button
    closebtn.addEventListener('click', () => {
        modal.classList.add('hidden')
        html.classList.remove('html-scroll')
      })
    
    //to display modal and to stop scrolling when modal is open
    modal.addEventListener('click', () => {
        modal.classList.add('hidden')
        html.classList.remove('html-scroll')
      })
    
    //to prevent modal from closing when clicked on content
    content.addEventListener('click', (event) => { event.stopPropagation(); })
}
    










