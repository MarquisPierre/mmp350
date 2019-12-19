const posts = document.getElementById('posts');
const postRef = firebase.database().ref('posts');
console.log(postRef)

function loadPosts() {
	postRef.on('child_added', function(snapshot) {
		createPost(snapshot.val());	   
	});
}
console.log(createElement);
function createElement(_class, text) {
	const element = document.createElement('div');
	element.classList.add(_class);
	element.textContent = text;
	return element;
}

function createPost(data) {

	const userData = users[data.uid] || {};

	const post = createElement('post');
	const text = createElement('text', data.text);
	const author = createElement('author', 'by ' + userData.displayName);
	
	var d = new Date(data.date);
	const date = createElement('date',(d.getMonth() + 1) + "." +  d.getDate() + "." + d.getFullYear());

	console.log(users[data.uid])


	const img = new Image();
	if (userData.imageURL) {
		img.src = userData.imageURL;
	} else {
		img.src = 'cat.jpg';
	}
	img.classList.add('profile-image');
	
//	posts.appendChild(post);
	posts.insertBefore(post, posts.firstElementChild);
	post.appendChild(img); 
	post.appendChild(text);
	post.appendChild(author);
	post.appendChild(date);
}





/* get users */
let userCount = 0;
const users = {};
firebase.database().ref('users').on('child_added', function(snapshot) {
	users[snapshot.key] = snapshot.val();
	userCount += 1;
});

firebase.database().ref('users').once('value', function(snapshot) {
	if (userCount === snapshot.numChildren()) {
		loadPosts();	
	}
});









