
import getData from '../scripts/getData-utl.js'



let displayData = async () => {

    let url = "http://localhost:3000/blog"

    let receivedData = await getData(url)
    console.log(receivedData)

    let displayDatatoDom = document.getElementById("table-body")

    receivedData.forEach(element => {
        let newTr = document.createElement("tr")
        
        let idcell = document.createElement("td")
        idcell.textContent = element.id

        let datecell = document.createElement("td")
        datecell.textContent = element.created_date

        let titlecell = document.createElement("td")
        titlecell.textContent = element.title

        let authorcell = document.createElement("td")
        authorcell.textContent = element.author

        let categorycell = document.createElement("td")
        categorycell.textContent = element.category

        let bodycell = document.createElement("td")
        bodycell.textContent = element.body

        let tagscell = document.createElement("td")
        tagscell.textContent = element.tags

        let viewcell = document.createElement("td")
        let viewbtn = document.createElement("button")
        viewbtn.textContent = "VIEW"
        viewbtn.addEventListener("click",view)

        function view(){
            localStorage.setItem("id",element.id)
            location.href = "http://127.0.0.1:5500/pages/view.html"
        }

        viewcell.append(viewbtn)

        let editcell = document.createElement("td")
        let editbtn = document.createElement("button")
        editbtn.textContent = "EDIT"
        editbtn.addEventListener("click",edit)

        function edit(){
            localStorage.setItem("id",element.id)
            location.href = "http://127.0.0.1:5500/pages/eidit.html"
        }

        editcell.append(editbtn)

        let deletecell = document.createElement("td")
        let deletebtn = document.createElement("button")
        deletebtn.textContent = "DELETE"

        deletebtn.addEventListener("click",deletedata)

        function deletedata(){
            localStorage.setItem("id",element.id)
            location.href = "http://127.0.0.1:5500/pages/delete.html"
        }

        deletecell.append(deletebtn)

        newTr.append(idcell,datecell, titlecell,authorcell,categorycell,bodycell,tagscell,viewcell,editcell,deletecell)
        displayDatatoDom.append(newTr)

    });

}

displayData()