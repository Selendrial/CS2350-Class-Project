//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let initial_cards = [{
    title: "Amazing!",
    comment: "Amazing quality. Authentic construction and materials. The clothing Wildhorse Fashion creates is clearly made with love and attension to detail. Thank you so much for the quality clothing.",
    fName: "Anita"
}]

function hideform() {
    document.querySelector("#myForm").classList.add('d-none')
    document.querySelector("#review_card").classList.remove('d-none')
}

function hideCards() {
    document.querySelector("#myForm").classList.remove('d-none')
    document.querySelector("#review_card").classList.add('d-none')
}

function getReview() {
    if (localStorage.getItem('review_card') && localStorage.getItem("review_card") != '[]') {
        return JSON.parse(localStorage.getItem('review_card'))
    } else {
        return initial_cards
    }
}

function addNewReview(event) {
    event.preventDefault()

    let t = document.querySelector('#title').value
    let c = document.querySelector('#comment').value
    let f = document.querySelector('#fname').value

    let reviews = getReview()

    if (t && c && f) {
        let review = {
            title: t,
            comment: c,
            fName: f
        }
        reviews.push(review)
        localStorage.setItem('review_card', JSON.stringify(reviews))
    }

    this.reset()
    displayReviews()
}

function displayReviews() {
    let cards = getReview()
    let cards_html = ''
 
    for (let c of cards) {
        cards_html += `

        <div class="card mb-3 mx-2" >
            <div class="row g-0">
                <div class="col-md">
                <div class="card-body">
                    <h5 class="card-title">${c.title}</h5>
                    <blockquote class="blockquote">${c.comment}
                      <span>${c.fName}</span>
                    </blockquote>
                  </p>
                </div>
                </div>
            </div>
        </div>

        `
    }

    document.querySelector("#review_card").innerHTML = cards_html
    hideform()

}




document.querySelector("#myForm").onsubmit = addNewReview
document.querySelector("#new_review").onclick = hideCards
document.querySelector(".to-cancel").onclick = hideform


displayReviews()