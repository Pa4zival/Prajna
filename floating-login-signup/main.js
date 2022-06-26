 // Reference messages collection
 var messagesRef = firebase.database().ref('users');

 //Listen for form submit
document.getElementById('signupForm').addEventListener('submit', submitForm);
document.getElementById('signinForm').addEventListener('submit', submitSigninForm);
function submitSigninForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('emailid');
  var password = getInputVal('pswd');

  // Save message
 saveMessageSignin( email, password);
}

function saveMessageSignin(email, password){
  // console.log('came here')
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // alert('signed in')
    
    var user = userCredential.user;
    window.location.href="../signinindex.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });}


 //Submit form
 function submitForm(e){
  e.preventDefault();

  // Get values
 var name = getInputVal('name');
  var email = getInputVal('email');
  var password = getInputVal('password');
  var password2 = getInputVal('password2');

  if (password != password2)
    { alert("passwords do not match!");}
  else
  {
  // Save message
 saveMessage(name, email, password);}
}
  // Function to get get form values
 function getInputVal(id){
   return document.getElementById(id).value;
  }
  
  // Save message to firebase
 function saveMessage(name, email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // alert('signed in')
    window.location.href="../signinindex.html";
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
 var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    email:email,
  password: password
  });}

 /* document.getElementById('logout').addEventListener('click', logoutsubmit);
function logoutsubmit(e){
    e.preventDefault();
    firebase.auth().signOut()
  .then(() => {
    
    window.location.href="index2.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
var errorMessage = error.message;
    alert(errorMessage)
  });} */