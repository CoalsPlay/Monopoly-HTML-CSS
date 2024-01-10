const board = document.querySelector('.board');
const btnB = document.querySelector('.btn-B');
const btnT = document.querySelector('.btn-T');
const btnL = document.querySelector('.btn-L');
const btnR = document.querySelector('.btn-R');

btnB.addEventListener('click', () => {
  board.style.transform = 'rotate(0)';
});

btnT.addEventListener('click', () => {
  board.style.transform = 'rotate(180deg)';
});

btnL.addEventListener('click', () => {
  board.style.transform = 'rotate(-90deg)';
});

btnR.addEventListener('click', () => {
  board.style.transform = 'rotate(90deg)';
});