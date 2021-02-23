// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  likeListener();
})

function likeListener() {
  let hearts = document.getElementsByClassName('like-glyph');

  mimicServerCall("testUrl") 
    .then(serverMessage => {
      for(let i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener('click', function() {
          if (hearts[i].innerText == EMPTY_HEART) {
            hearts[i].innerText = FULL_HEART;
          } 
          else {
            hearts[i].innerText = EMPTY_HEART;
          } 
        })
      }
    })
    .catch(error => {
      document.getElementById("modal").className = "";
      setTimeout(function() {document.getElementById("modal").className = "hidden";}, 5000)
    });
  }

  // for(let i = 0; i < hearts.length; i++) {
  //   hearts[i].addEventListener('click', function() {
  //     if (hearts[i].innerText == EMPTY_HEART) {
  //       hearts[i].innerText = FULL_HEART;
  //     } 
  //     else {
  //       hearts[i].innerText = EMPTY_HEART;
  //     } 
  //   })
  // }






//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
