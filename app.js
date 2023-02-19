const myForm = document.querySelector('.myForm')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')

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
    console.log('Form has been submitted')
    library.push(new book(title.value, author.value, pages.value, read.value))
    console.log(JSON.stringify(library))
    add()
})


function add() {
    const div = document.createElement('div')
    div.innerHTML = `
    <div> Title: ${JSON.stringify(library[library.length-1].title).slice(1, -1)} </div>
    <div> Author: ${JSON.stringify(library[library.length-1].author).slice(1, -1)} </div>
    <div> Pages: ${JSON.stringify(library[library.length-1].pages).slice(1, -1)} </div>
    <div> Read: ${JSON.stringify(library[library.length-1].read).slice(1, -1)} </div>
    `
    document.querySelector('.container2').appendChild(div)
}
