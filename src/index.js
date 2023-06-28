import './style.css';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');
const scoreList = document.getElementById('score-list');
const apiKey = '5ZsB1os0MNFSzXzByfC2';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

form.addEventListener('click', (e) => {
  if (e.target.id === 'submit') {
    e.preventDefault();
    const user = document.getElementById('user');
    const score = document.getElementById('score');
    console.log(`${user.value}, so far so good. Your score is ${score.value}`);
});
