const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");




loginButton.onclick = function(event){

    const promise = firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value);
    
    promise.catch(function(error){
        message.textContent =" you dingus " + error.message;
    });
};

/* auth state */

firebase.auth().onAuthStateChanged(function(user) {
                                
       
    if(user){
        document.body.classList.add(auth);
        displayName.textContent = "Welcome, " + user.displayName;
    } else{
        document.body.classList.remove('auth');
        displayName.textContent = "";
    }

});

/*logout*/

const logoutButton = document.getElementById("logout");
loginButton.onclick = function(){
    firebase
}





