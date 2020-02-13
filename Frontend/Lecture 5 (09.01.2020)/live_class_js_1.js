var list = document.querySelectorAll("h1")
for(let i = 0; i< list.length;i++)
{
    list[i].addEventListener("mouseover", function(){
        list[i].classList.toggle("some_class")
    })
    list[i].addEventListener("mouseout", function(){
        list[i].classList.remove("some_class")
    })
    list[i].addEventListener("click", function(){
        list[i].classList.toggle("another_class")
    })
}


/*Try - Failed
var list_select = document.querySelector("h1")

list_select.classList.add("some_class")

list_select.addEventListener("click", function(){
    list_select.classList.add("another_class")
})
list_select.addEventListener("click", function(){
    list_select.classList.remove("another_class")  
})*/


/*var h1_select = document.querySelector("h1")
var btn = document.querySelector("button")
btn.addEventListener("mouseover", function(){
    h1_select.classList.add("some_class")
    h1_select.textContent = "some class left"
})
btn.addEventListener("mouseout", function(){
    h1_select.classList.remove("some_class")
    h1_select.textContent = "no class left"
})*/


/*var h1_select = document.querySelector("h1")
var btn = document.querySelector("button")
h1_select.addEventListener("click", function(){
    h1_select.classList.add("some_class")
    h1_select.textContent = "No Class Left"    
})*/


/*var h1_select = document.querySelector("h1")
h1_select.classList.add("some_class")
h1_select.textContent = "No Class Left"*/


/*var h1_select = document.querySelector("h1")
h1_select.style.color = "pink"
h1_select.style.backgroundColor = "steelblue"
h1_select.style.border = "2px solid red"*/


/*var h1_select = document.querySelector("h1")
h1_select.classList.add("some_class")*/