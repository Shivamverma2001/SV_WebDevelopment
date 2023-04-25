const password = prompt("Please enter a password");
if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Good Job! No space");
    } else {
        console.log("Password can't contain spaces!");
    }
} else {
    console.log("Password too short! Must be 6+ characters");
}