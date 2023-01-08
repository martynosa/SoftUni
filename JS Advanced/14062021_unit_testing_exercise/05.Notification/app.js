function notify(message) {
  console.log('todo')

  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block'
  notificationDiv.addEventListener('click', notificationDivClickHandler);

  function notificationDivClickHandler() {
    let notificationDiv = document.getElementById('notification');
    notificationDiv.style.display = 'none';
  }
}