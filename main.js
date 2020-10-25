// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(){
      if(!heart.classList.contains("activated-heart")) {
        heart.classList.add("activated-heart");
        heart.innerText = FULL_HEART;
      } else {
        heart.classList.remove("activated-heart");
        heart.innerText = EMPTY_HEART;
      }
     
    })
    .catch(function(error) {
      const errorModal = document.getElementById("modal");
      errorModal.classList.remove("hidden");
      errorModal.innerHTML = error;
      setTimeout(function(){ 
        errorModal.classList.add("hidden");
       }, 3000);
        
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


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
