console.log('Hello from about.js!');

const buttonResponse = document.getElementById('response');

const textAreaContent = document.getElementById('feedback');

const submitButton = document.getElementById('submit');
submitButton.onclick = function collectFeedback() {
  buttonResponse.innerHTML = `${'<h3>Thanks for your feedback!</h3>'
    + '<p>Your input is greatly appreciated. If you would like to stay in contact or have any academic inquiries, you can reach me at: wrpro27@terpmail.umd.edu</p>'
    + '<p>Your Response: '}${textAreaContent.value}</p>`;
};
