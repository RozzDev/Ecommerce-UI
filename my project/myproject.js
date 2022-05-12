

function logIn() {
    const login = document.getElementsByClassName('login')[0]
    const log = document.getElementsByClassName('log')[0]
    const signin = document.getElementsByClassName('signin')[0]
    const sign = document.getElementsByClassName('sign')[0]
    
    log.addEventListener('click', () => {
        login.classList.toggle('active');
    })
    sign.addEventListener('click', () => {
        signin.classList.toggle('active')
    })
}
logIn()
