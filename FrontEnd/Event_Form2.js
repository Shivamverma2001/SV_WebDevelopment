const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newName = tweetForm.elements.username;
    const newTweet = tweetForm.elements.tweet;
    addTweet(newName.value, newTweet.value);
    tweet.value = '';
    tweet.nameF = '';
})
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}