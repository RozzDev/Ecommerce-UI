function startGame() {
  const wheeler = document.getElementsByClassName("wheeler")[0];
  const benz = document.getElementsByClassName("benz")[0];
  const car = document.getElementsByClassName("car")[0];
  const poshy = document.getElementsByClassName("poshy")[0];
  const chevherlot = document.getElementsByClassName("cheverlot")[0];
  const wheelers = document.getElementsByClassName("wheeler1")[0];
  const benzs = document.getElementsByClassName("benz1")[0];
  const cars = document.getElementsByClassName("car1")[0];
  const poshys = document.getElementsByClassName("poshy1")[0];
  const chevherlots = document.getElementsByClassName("cheverlot1")[0];

  wheeler.addEventListener('click', () => {
    wheelers.classList.toggle('active');
    benz.classList.remove('active');
    cars.classList.remove('active');
    poshys.classList.remove('active');
    chevherlots.classList.remove('active');
  });
  benz.addEventListener('click', () => {
    benzs.classList.add('active');
    wheelers.classList.remove('active')
    cars.classList.remove('active');
    poshys.classList.remove('active');
    chevherlots.classList.remove('active');
  });
  car.addEventListener('click', () => {
    cars.classList.add('active');
    benzs.classList.remove('active');
    wheelers.classList.remove('active');
    poshys.classList.remove('active');
    chevherlots.classList.remove('active');
  });
  poshy.addEventListener('click', () => {
    poshys.classList.add('active');
    cars.classList.remove('active');
    benzs.classList.remove('active');
    wheelers.classList.remove('active');
    chevherlots.classList.remove('active');
  });
  chevherlot.addEventListener('click', () => {
    chevherlots.classList.add('active');
    cars.classList.remove('active');
    benzs.classList.remove('active');
    wheelers.classList.remove('active');
    poshys.classList.remove('active');
  });
}
startGame();
