const myForm = document.querySelector('.myForm')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')
const container2 = document.querySelector('.container2')
let button = document.querySelectorAll('button')


const library = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return this.title;
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    library.push(new book(title.value, author.value, pages.value, read.value))
    add()
    button = document.querySelectorAll('button')
})


function add() {
    const div = document.createElement('div')
    div.classList = `book${library.length}`
    div.innerHTML = `
    <div> Title: ${JSON.stringify(library[library.length-1].title).slice(1, -1)} </div>
    <div> Author: ${JSON.stringify(library[library.length-1].author).slice(1, -1)} </div>
    <div> Pages: ${JSON.stringify(library[library.length-1].pages).slice(1, -1)} </div>
    <div> Read: ${JSON.stringify(library[library.length-1].read).slice(1, -1)} </div>
    <button class="book${library.length}" onClick="deleteButton('book${library.length}')">Delete</button>
    `
    document.querySelector('.container2').appendChild(div)
}


function deleteButton(className) {
    document.getElementsByClassName(className)[0].remove()
}