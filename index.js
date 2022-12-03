document.addEventListener('DOMContentLoaded', function (event) {
    let name = localStorage.getItem('name');
    let picture = localStorage.getItem('picture');

    if (name != null) {
        document.getElementById('author').value = name;
    }

    if (picture != null) {
        document.getElementById('picture').value = picture;
    }
})

const author = document.getElementById('author');
const picture = document.getElementById('picture');

function checkSpam() {
    let commentSect = document.querySelector('#commentSection');
    let comment = document.getElementById('comment').value;
    let spam = /viagra|xxx/gi;
    newComm = comment.replace(spam, "***");

    commentSect.innerHTML += `<img width="40px" height="auto" src="${picture.value}"> ${author.value} : ${newComm} <br>`;
    document.getElementById('comment').value = '';

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author.value);
    }

    if (localStorage.getItem('picture') == null) {
        localStorage.setItem('picture', picture.value);
    }
}