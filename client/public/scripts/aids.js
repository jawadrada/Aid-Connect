// TODO: Add donation Link to the card
// TODO: Add real data with valid image URLs
// TODO: ReStyle the site, add a banner at the top, style with picocss
// TODO: Submit with a README.md file

const renderAids = async () => {
    const response = await fetch('/aids')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(aid => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            // Invalid URL
            topContainer.style.backgroundImage = `url(${aid.image})`

            const name = document.createElement('h3')
            name.textContent = aid.name
            bottomContainer.appendChild(name)

            // donationLink

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/aids/${aid.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Aid Organizations 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderAids() 
}