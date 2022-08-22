function editName() {
    var profileNameEl = document.getElementById("profile-name");
    profileNameEl.innerHTML = "John Deer";
}

function removeFriendRequest(element) {
    var parent = element.parentNode;
    parent.parentNode.removeChild(parent);
}