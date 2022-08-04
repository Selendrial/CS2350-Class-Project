import "bootstrap"

import {
    dress_Gal
} from "./dressArr"

for (let d of dress_Gal) {
    let d_thumb = document.getElementById('d' + d.id)
    d_thumb.innerHTML = `
        <img src="${d.pic}" alt="${d.title}" class="img-thumbnail"/>
    `

    d_thumb.onclick = function () {
        displayDress(d)
    }
}

let featured_dress = document.querySelector(".featured")

function displayDress(dress) {
    featured_dress.innerHTML = `
        <div class="card">
            <div class="card-header">${dress.title}</div>
                <img src="${dress.pic}" class="card-img-top" alt="${dress.title}">
                <div class="card-body">
                <h5 class="card-title"><small>${dress.year}</small></h5>
                <p class="card-text">${dress.description}</p>
            </div>
        </div>
    `
}


displayDress(dress_Gal[0])