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
  filterBtn = document.querySelectorAll('.filter-btn'),
  lowerSlider = document.querySelector('#lower'),
  upperSlider = document.querySelector('#upper'),
  inputOne = document.querySelector('#one'),
  inputTwo = document.querySelector('#two'),
  minValue = document.querySelector('.min-val'),
  maxValue = document.querySelector('.max-val'),
  filterButton = document.querySelector('.filter-button'),
  fieldbox = document.querySelector('.field-contain'),
  logout = document.querySelector('.home-login'),
  email = document.querySelector('.workemail'),
  subscribe = document.querySelector('.subscribe-btn'),
  maxSliderValue = 60;
// let changeee;

//to avoid addeventlistner error validating pages before executing code 
if (indexPage) {

  login.addEventListener('click', (e) => {
    //prevent form submission
    e.preventDefault();
    usernameValue = username.value;
    passwordValue = password.value;
    checkDetails();
  })

  const checkDetails = () => {
    removeError();
    //check username and password match predefined set of values
    if (usernameValue === "AxionedUser" && passwordValue === "Axioned2023") {

      //storing username and password in session storage
      sessionStorage.setItem('username', usernameValue);
      sessionStorage.setItem('password', passwordValue);
      //redirect to home page
      window.location.href = "home.html";
    }
    else {
      password.classList.add('error-field');
      username.classList.add('error-field');
      errorText = document.createElement("span");
      errorText.classList.add('errortxt');
      errorText.innerText = "*Invalid UserName or Password";
      fieldbox.appendChild(errorText)
    }
  }
  // to remove errortext span if already exists
  const removeError = () => {
    const existingErrorText = document.querySelector('.errortxt');
    if (existingErrorText) {
      existingErrorText.remove();
    }
  }

}

//to avoid addeventlistner error validating pages before executing code 
if (homePage || productsPage) {
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

  // on logout clearing session storage and redirect to login page
  logout.addEventListener('click', () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')

    //modifies the current history entry, replacing it with null
    history.replaceState(null, null, './index.html');

    window.location.href = "./index.html";
  })
//on click validate email
  subscribe.addEventListener('click', () => {
    validateEmail();
  })
}
//validate email
function validateEmail() {
  removeErrorTxt();
  const mail = email.value.trim();
  const validRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if( mail === '' || mail.match(validRegex) == null ) {
    email.classList.add('error-field');
    Textt = document.createElement("span");
    Textt.classList.add('errortxt');
    Textt.innerText = "*Invalid Email";
    formField.appendChild(Textt)
  } else {
    workemail.classList.remove('error-field');
    alert("Subscribed Successfully");
  }
}

// to remove errortext span if already exists
const removeErrorTxt = () => {
  const existingErrorText = document.querySelector('.errortxt');
  if (existingErrorText) {
    existingErrorText.remove();
  }
}

//to avoid addeventlistner error validating pages before executing code     
if (homePage) {
  let number = 0;
  //on click displays previous slide
  previousButton.addEventListener('click', () => {

    if (number === 50 || number === 25) {
      number += -25
      sliderImage.style.transform = `translateX(-${number}%)`;
    }
  })
//on click displays next slide
  nextButton.addEventListener('click', () => {
    if (number < maxSliderValue) {

      number += 25;
      console.log("numberin" + number);
      sliderImage.style.transform = `translateX(-${number}%)`;
    }
  })

  //to change header background color of header on scroll
  var scrollTrigger = 500;

  window.onscroll = function () {
    if (window.scrollY >= scrollTrigger) {
      document.getElementsByTagName("header")[0].classList.add('bgr');
    } else {
      document.getElementsByTagName("header")[0].classList.remove('bgr');
    }
  }
}

//to avoid addeventlistner error validating pages before executing code 
if (productsPage) {
  //appending data to show value on modal and prevent page scroll
  image.forEach((img, index) => {
    img.addEventListener('click', () => {
      content.innerHTML = filterDiv[index].innerHTML;
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

  //price range slider

  //storing value 
  inputTwo.value = upperSlider.value;
  inputOne.value = lowerSlider.value;

  let lowerVal = parseInt(lowerSlider.value);
  let upperVal = parseInt(upperSlider.value);
  //updating value when price silder is moved 
  function updateInputs() {
    inputOne.value = lowerSlider.value;
    inputTwo.value = upperSlider.value;
  }
  //setting value of price of first slider
  upperSlider.addEventListener('input', function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;
    }
    updateInputs();
  });
  //setting value of price of second slider
  lowerSlider.addEventListener('input', function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;
    }
    updateInputs();
  });

  // to filter tabs
  filterBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      removeactive();
      btn.classList.add('filter-active');
      let dataFilter = btn.getAttribute('data-filter');
      //add and remove active class 
      filterDiv.forEach(filter => {
        filter.classList.remove('displaytrue');
        filter.classList.add('displaynone');
        // condition satisfied then following class will be added and removed 
        if (filter.getAttribute('data-item') == dataFilter || dataFilter == 'everything') {

          filter.classList.add('displaytrue');
          filter.classList.remove('dispalynone');
        }
      });
    })
  });

  //function to remove active class from nav
  function removeactive() {
    filterBtn.forEach(btn => {
      btn.classList.remove('filter-active');
    })
  };

  //to filter elements by price 
  filterButton.addEventListener('click', () => {
    let minPrice = minValue.value, maxPrice = maxValue.value;

    filterDiv.forEach(filter => {

      filter.classList.remove('displaytrue');
      filter.classList.add('displaynone');
      // condition satisfied then following class will be added and removed 

      if (parseInt(filter.getAttribute('data-min')) >= parseInt(minPrice) &&
        parseInt(filter.getAttribute('data-max')) <= parseInt(maxPrice)) {

        filter.classList.add('displaytrue');
        filter.classList.remove('dispalynone');
      }
    });
  })

}











