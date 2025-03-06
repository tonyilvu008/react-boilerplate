// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Handle WeChat login icon click
  const wechatLoginIcon = document.getElementById('wechatLoginIcon');
  if (wechatLoginIcon) {
    wechatLoginIcon.addEventListener('click', function () {
      // Redirect to the WeChat login page
      window.location.href = 'login/wechat-login.html'; // Replace with your actual WeChat login page URL
    });
  } else {
    console.error('WeChat login icon not found in the DOM.');
  }

  // Handle Email login icon click
  const emailLoginIcon = document.getElementById('emailLoginIcon');
  if (emailLoginIcon) {
    emailLoginIcon.addEventListener('click', function () {
      // Redirect to the Email login page
      window.location.href = 'login/email-login.html'; // Replace with your actual Email login page URL
    });
  } else {
    console.error('Email login icon not found in the DOM.');
  }
});
