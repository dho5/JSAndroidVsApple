// Android vs Apple JavaScript Assignment

// When Android button is clicked
document.getElementById('androidBtn').addEventListener('click', clickAndroid);
document.getElementById('appleBtn').addEventListener('click', clickApple);

// Event Functions
function clickAndroid() {
  // Change Android vs Apple logo to the Android logo
  document.getElementById('img1').src = 'images/Android-Logo.jpg';
  // Change the text of the link to "Android Home"
  document.getElementById('link1').innerHTML = 'Android Home';
  // Change "Explore the Debate" background color
  document.getElementById('link1').style.backgroundColor = '#a4c93b';
  // Change the link
  document.getElementById('link1').href = 'https://www.android.com/';
  // Change background color of body
  document.body.style.backgroundColor = '#a4c93b';
}

function clickApple() {
  // Change the image to the Apple logo
  document.getElementById('img1').src = 'images/Apple-Logo.jpg';
  // Change the text of the link to "Apple Home"
  document.getElementById('link1').innerHTML = 'Apple Home';
  // Change the background color of "Explore the Debate"
  document.getElementById('link1').style.backgroundColor = '#b6bcca';
  // Change the link
  document.getElementById('link1').href = 'https://www.apple.com/';
  // Change background color of the body
  document.body.style.backgroundColor = '#b6bcca';
}