const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

btnHamburger.addEventListener('click', function(){ //close
    if(header.classList.contains('open')){
        header.classList.remove('open')
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    }else{ //open
        header.classList.add('open')
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
    }
})