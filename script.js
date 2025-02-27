//your JS code here. If required.
const nameInput = doucment.getElementById('fname');
nameInput.addEventListener('blur', function(){
	nameInput.value=nameInput.value.toUpperCase();
});