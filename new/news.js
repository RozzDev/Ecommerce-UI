const navbarlinks = document.getElementsByClassName('navbar')[0];
const toggleButton = document.getElementsByClassName('togglebtn')[0];

toggleButton.addEventListener('click', () => {
  navbarlinks.classList.toggle('active');
});