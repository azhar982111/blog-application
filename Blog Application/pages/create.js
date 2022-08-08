
document.getElementById("submitbtn").addEventListener("click", postData)

function postData() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;


    let created_date = today
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let category = document.getElementById("Category").value
    let body = document.getElementById("body").value
    let tags = document.getElementById("tags").value

    let obj = {}

    obj.created_date = created_date
    obj.title = title
    obj.author = author
    obj.category = category
    obj.body = body
    obj.tags = tags


    console.log(obj)

    let url = "http://localhost:3000/blog"
    let res = fetch(url, {

        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    // console.log(res)
}


