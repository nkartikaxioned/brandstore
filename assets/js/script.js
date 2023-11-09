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
commonLi = document.querySelectorAll('.common-li');



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

//appending data to show value on modal and stop page scroll
image.forEach((img,index) => {
    img.addEventListener('click', ()=> {
        content.innerHTML=filterDiv[index].innerHTML;
        removeHidden();
        html.classList.add('html-scroll')
    })
})

//function to remove hidden class from modal
function removeHidden() { modal.classList.remove('hidden') }

// closing modal on clicking close button
closebtn.addEventListener('click', () => {
    modal.classList.add('hidden')
    html.classList.remove('html-scroll')
  })

//to show modal and to stop scrolling when modal is open
modal.addEventListener('click', () => {
    modal.classList.add('hidden')
    html.classList.remove('html-scroll')
  })

//to stop modal from closing when clicked on content
content.addEventListener('click', (event) => { event.stopPropagation(); })

















