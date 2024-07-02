var webName = document.getElementById("bookmarkName");
var webUrl = document.getElementById("bookmarkUrl");
var bookmarks = [];
if(localStorage.getItem("bookmarks") != null){
    bookmarks=JSON.parse(localStorage.getItem("bookmarks"))
    displayUrl(bookmarks)
}


console.log(webName, webUrl);




function addUrl() {
    website = {
        websiteName: webName.value,
        websiteUrl: webUrl.value
    }
    
    bookmarks.push(website);
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
    displayUrl(bookmarks);
    clear();
    console.log(bookmarks);
}


function displayUrl(list) {
    var cartona = '';
    for (i = 0; i < list.length; i++) {
        cartona += `  
          <tr>
            <th scope="row">${i+1}</th>
            <td>${list[i].websiteName}</td>
            <td><button class="btn btn-success"><a class="text-decoration-none text-light" href="${list[i].websiteUrl}" target="_blank" rel="noopener noreferrer">Visit</a></button></td>
            <td><button onclick="deleteWeb(${i})" class="btn btn-danger">Delete</button></td>
          </tr>`;
    }
    document.getElementById("bookmarks_list").innerHTML = cartona;
}

function clear(){
    webName.value=null;
    webUrl.value=null;
}

function deleteWeb(index){
bookmarks.splice(index,1)
localStorage.setItem("bookmarks",JSON.stringify(bookmarks))

displayUrl(bookmarks);
}
