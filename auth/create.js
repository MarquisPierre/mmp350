const userName = document.getElementById('user-name');
const newEmail = document.getElementById('new-email');
const newPassword = document.getElementById('new-password');
const creatAccountButton = document.getElementById('create-account');
const errorMessage = document.getElementById('error-message');


creatAccountButton.onclick = function(event){
   const  promise = firebase.auth().createUserWithEmailAndPassword( newEmail.value, newPassword.value);

   promise.catch(function(error){
    errormessage.textContent = " you dingus " + error.message;
      
        });
        promise.then(function() {
           location.href = "index.html";
        })
   };
