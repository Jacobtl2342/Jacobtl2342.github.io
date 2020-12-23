const menuBtn = document.querySelector('.navToggle');
const sideNav = document.querySelector('.sideNav');

menuBtn.addEventListener('click', myFunction);

function myFunction(){
    if(sideNav.className === 'sideNav inactive'){
        sideNav.classList.remove('inactive');
        sideNav.classList.add('active');
    }else{
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive')
    }
}
