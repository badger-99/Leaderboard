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

    const packageObj = {
      score: score.value,
      user: user.value,
    };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(packageObj),
    })
      .then((result) => {
        return result.json();
      })
      // .then((data) => {console.log('Data', data);})
      .catch((error) => console.log(error));
  }
  form.reset();
});

refresh.addEventListener('click', async () => {
  const leaderboard = await fetch(url, { method: 'GET' });
  const data = await leaderboard.json();
});
