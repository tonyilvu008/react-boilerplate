// Handle login icon click
document.getElementById('loginIcon').addEventListener('click', function() {
    // Redirect to the login page
    window.location.href = 'login/login.html';
  });
  
 // Handle WeChat login icon click
document.getElementById('wechatLoginIcon').addEventListener('click', function() {
  alert('Redirecting to WeChat login...');
  // Redirect to WeChat login page or show a modal
  window.location.href = 'https://open.weixin.qq.com/connect/qrconnect'; // Example WeChat login URL
});

// Handle Email login icon click
document.getElementById('emailLoginIcon').addEventListener('click', function() {
  alert('Redirecting to Email login...');
  // Redirect to Email login page or show a modal
  window.location.href = 'login/login.html'; // Example Email login page
});

  