
  document.getElementById('tg').addEventListener('click', function() {
    window.open('https://t.me/eva_sandwich', '_blank');
  });

  document.getElementById('phone-btn').addEventListener('click', function() {
    const phoneNumber = '+7 (916) 007-79-22';
    
    navigator.clipboard.writeText(phoneNumber).then(function() {

      const snackbar = document.getElementById('snackbar');
      snackbar.className = 'show';
      
      setTimeout(function() {
        snackbar.className = snackbar.className.replace('show', '');
      }, 3000);
    }).catch(function(err) {
      console.error('Ошибка копирования: ', err);
    });
  });
