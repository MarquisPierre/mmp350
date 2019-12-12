const uid = location.search.split('=')[1];
const userRef = firebase.database().ref('users').child(uid);

const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profilePassword = document.getElementById('profile-password');
const bioInput = document.getElementById('bio');
const updateButton = document.getElementById('update-profile');

userRef.on('value', function(snapshot) {
	console.log(snapshot);
	const userInfo = snapshot.val();
	profileName.value = userInfo.displayName;

	if (userInfo.imageURL) {
		document.getElementById('profile-image').src = userInfo.imageURL;
	}
	
	if (userInfo.bio) {
		bioInput.value = userInfo.bio;
	}
	if (userInfo.displayPassword){
		profilePassword.value = userInfo.displayPassword;
	}
	if (userInfo.displayEmail){
		profileEmail.value = userInfo.displayEmail;
	}
});

updateButton.onclick = function() {
	userRef.update({
		displayName: profileName.value,
		bio: bioInput.value,
		displayEmail: profileEmail.value,
		displayPassword: profilePassword.value
	});
};


const imageButton = document.getElementById('submit-image');
imageButton.addEventListener('click', function() {
	// get the file
	const file = document.getElementById('image-file').files[0];
	if (file) {
		// upload the file
		const storage = firebase.storage();
		const user = firebase.auth().currentUser;
		const ref = storage.ref('users').child(user.uid).child('profile-image');
		const promise = ref.put(file);
		
		promise.then(function(image) {
			return image.ref.getDownloadURL();
		}).then(function(url) {
			userRef.update({ imageURL: url });
			document.getElementById('profile-image').src = url;
			document.getElementById('add-image').style.display = 'none';
		});
	}
	
});
