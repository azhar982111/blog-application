import getData from '../scripts/getData-utl.js'

let id = localStorage.getItem("id")

let url = `http://localhost:3000/blog/${id}`




let displayData = async () => {
    let receivedData = await getData(url)

    let containerDiv = document.getElementById("container")

        let parentDiv = document.createElement("div")
        parentDiv.setAttribute("id","parentDiv")

        let titleDiv = document.createElement("div")
        let title = document.createElement("p")
        title.setAttribute("id","title")
        title.textContent = receivedData.title
        titleDiv.append(title)

        let bodyDiv = document.createElement("div")
        let bodyText = document.createElement("p")
        bodyText.setAttribute("id","bodyText")
        bodyText.textContent = receivedData.body
        bodyDiv.append(bodyText)

        let authorDiv = document.createElement("div")
        let authorDivText = document.createElement("p")
        authorDivText.setAttribute("id","authorDivText")
        authorDivText.textContent = receivedData.author
        authorDiv.append(authorDivText)

        parentDiv.append(titleDiv,bodyDiv,authorDiv)
        containerDiv.append(parentDiv)

    console.log(receivedData)

}

displayData()
