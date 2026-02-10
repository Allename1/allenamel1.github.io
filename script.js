function yesClicked() {
  document.getElementById('question').innerText = 'YAYYY 💜 I knew it 😍';
  const gif = document.getElementById('gif');
  gif.src = 'https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif';
  gif.style.display = 'block';
}

function moveNo() {
  const noBtn = document.getElementById('noBtn');
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}
