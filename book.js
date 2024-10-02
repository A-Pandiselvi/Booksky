//select popupadd
var popupoverlay = document.querySelector(".popup")
var popupoverbox = document.querySelector(".popupbox")
var addbtn = document.getElementById("add-popup")

addbtn.addEventListener('click',function(){
popupoverlay.style.display="block"
    popupoverbox.style.display="block"
})

//select cancel button
var popupcancel =document.getElementById("book-cancel")

popupcancel.addEventListener('click', function(event){
   event.preventDefault();
   popupoverlay.style.display="none"
    popupoverbox.style.display="none"
})

//select container,book-add, book-title-input,book-author-input,book-description

var container=document.querySelector(".container")
var hole =document.querySelector(".holebox")
var addbook = document.getElementById("book-add")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescrip = document.getElementById("book-description")


addbook.addEventListener('click',function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","holebox")
    div.innerHTML=` <h1 class="heading">${booktitle.value}</h1><br>
        <h3>${bookauthor.value}</h3><br>
        <p>${bookdescrip.value}</p>
        <br><button class="del" onclick="delbook(event)">Delete</button>`
    container.append(div)

       popupoverlay.style.display="none"
    popupoverbox.style.display="none"
})



function delbook(event){
    event.target.parentElement.remove()
}





