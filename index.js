document.addEventListener('DOMContentLoaded', function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById('author').value = name;
    }
})

const author = document.getElementById('author');
const picture = document.getElementById('picture');

function checkSpam() {
    let commentSect = document.querySelector('#commentSection');
    let comment = document.getElementById('comment').value;
    let spam = /viagra|xxx/gi;
    newComm = comment.replace(spam, "***");

    let userPic = new Image(40, 40);
    userPic.src = picture.value;
    commentSect.append(author.value + ": " + newComm + '\n');
    commentSect.prepend(userPic, " ");
    document.getElementById('comment').value = '';
}

function checkMessage() {
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author.value);
    }
}