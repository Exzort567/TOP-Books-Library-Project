const myBooks = [];
const books = document.querySelector('.books');
const addBtnModal = document.querySelector('.addBtnModal');
const addBookDialog = document.querySelector('#addBook');
const cancelBtn = document.querySelector('#cancelBtn')
const addBookBtn = document.querySelector('#addBtn');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}