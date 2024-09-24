const renderAid = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/aids')
    const data = await response.json()

    const aidContent = document.getElementById('gift-content')

    let aid
    aid = data.find(aid => aid.id === requestedID)

    if (aid) {
        document.getElementById('image').src = aid.image
        document.getElementById('name').textContent = aid.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + aid.submittedBy
        document.getElementById('description').textContent = aid.description
        document.title = `Aid Connect - ${aid.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Aid Available 😞'
        aidContent.appendChild(message)
    }
}

renderAid()