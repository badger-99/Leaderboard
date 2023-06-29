import './style.css';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');
const scoreList = document.getElementById('score-list');
const apiKey = 'YfhSXvxEeVLwWNMLhlRg';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

form.addEventListener('click', (e) => {
  if (e.target.id === 'submit') {
    e.preventDefault();
    const user = document.getElementById('user');
    const score = document.getElementById('score');

    const packageObj = {
      score: score.value,
      user: user.value,
    };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(packageObj),
    })
      .then((result) => result.json());
  }
});

refresh.addEventListener('click', async () => {
  const leaderboard = await fetch(url, { method: 'GET' });
  const data = await leaderboard.json();

  scoreList.innerHTML = '';
  data.result.forEach((element) => {
    const p = document.createElement('p');
    p.className = 'score';
    p.innerHTML = `${element.user}: ${element.score}`;
    scoreList.appendChild(p);
  });
});
