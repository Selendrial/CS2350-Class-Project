import "bootstrap"

import {
    hats_Gal
} from "./hatArr"

for (let h of hats_Gal) {
    let h_thumb = document.getElementById('h' + h.id)
    h_thumb.innerHTML = `
        <img src="${h.pic}" alt="${h.title}" class="img-thumbnail"/>
    `

    h_thumb.onclick = function () {
        displayHats(h)
    }
}

let featured_hat = document.querySelector(".featured")

function displayHats(hat) {
    featured_hat.innerHTML = `
        <div class="card">
            <div class="card-header">${hat.title}</div>
                <img src="${hat.pic}" class="card-img-top" alt="${hat.title}">
                <div class="card-body">
                <h5 class="card-title"><small>${hat.year}</small></h5>
                <p class="card-text">${hat.description}</p>
            </div>
        </div>
    `
}


displayHats(hats_Gal[0])