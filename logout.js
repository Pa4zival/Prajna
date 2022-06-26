document.getElementById('logout').addEventListener('click', logoutsubmit);
function logoutsubmit(e){
    e.preventDefault();
    firebase.auth().signOut()
  .then(() => {
    
    window.location.href="index3.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
var errorMessage = error.message;
    alert(errorMessage)
  });}