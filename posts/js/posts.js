const postText = document.getElementById('post-text');
const publishButton = document.getElementById('publish');

publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function(event){
     if(event.which == 13){
         publishPost();
     }


});
     const ref = firebase.database().ref('posts');


publishPost(){
   function publishPost(){
       const post = {}
       post.text = postText.nodeValue;
       post.uid = firebase.auth().currentUser.uid;
       post.date = Date.now();
       postText.value = "";
       }
    }
}