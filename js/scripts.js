document
  .getElementById('nameForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    showLetterCard();
  });

function showLetterCard() {
  let username = document.getElementById('username').value;
  document.getElementById('letter').style.display = 'none';
  document.getElementById('card').style.display = 'flex';

  if (username.trim() !== '') {
    document.getElementById('recipientName').innerText = username;
  }
}
