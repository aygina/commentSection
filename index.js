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

    let userPic = new Image(100, 200);
    userPic.src = picture.value;

    commentSect.append(author.value + newComm + '\n');
    document.body.appendChild(userPic);
    document.getElementById('comment').value = '';
    console.log("hello!");
}

function checkMessage() {
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author.value);
    }
}