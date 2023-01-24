'use strict'

const API = "https://jsonplaceholder.typicode.com/photos";

const elList = document.querySelector('#list')


fetch(API)
.then(response => response.json())
.then(data => 
    data.forEach((img) => {
        const item = document.createElement('li')
        item.classList = 'card'
        item.innerHTML = `
            <img src="${img.url}">
            <p><strong>Name:</strong>${img.title}</p>
        `
        elList.appendChild(item)
    })
    )