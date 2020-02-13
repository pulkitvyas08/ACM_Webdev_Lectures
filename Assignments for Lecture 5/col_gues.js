var num_boxes = 6
var ran_colors = []
var session_color;
var rgb_written = document.getElementById("rgb_text");

var new_game = document.querySelector("#NG")
new_game.addEventListener("mouseover", function(){
    new_game.classList.add("TXCH")
});
new_game.addEventListener("mouseout", function(){
    new_game.classList.remove("TXCH")
});
new_game.addEventListener("click", function(){
    NewGame();
});

var diff_easy = document.querySelector("#LH")
diff_easy.addEventListener("click", function(){
    diff_easy.classList.toggle("TXCH")
})

var diff_hard = document.querySelector("#LE")
diff_hard.addEventListener("click", function(){
    diff_hard.classList.toggle("TXCH")
})

function randomColors(n) 
{
    var col_arr = [];
    for(var i=0; i<n; i++)
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var col_arr_element = "rgb(" + r + ", " + g + ", " + b + ")";
        col_arr.push(col_arr_element);
    }
    return col_arr;
}

var boxes = document.querySelectorAll(".box");



function ArrangeBoxes()
{
    for(var i=0; i< boxes.length; i++)
    {
        boxes[i].addEventListener("click", function(){
            var choosen_color = this.style.background;
            if(choosen_color == session_color)
            {
                message.textContent = "You Won!";
            }
            else
            {
                this.style.background = "#0C0808"
                message.textContent = "Try Again";
            }
        })
    }
}

function set_session_color()
{
    var ran_number = Math.floor(Math.random() * colors.length);

    return colors[ran_number];
}

function NewGame()
{
    ran_colors = randomColors(num_boxes);
    session_color = set_session_color();
    rgb_written.textContent = session_color;

    for(var i=0; i<boxes.length; i++)
    {
        boxes[i].style.background = ran_colors[i];
    }
}


function main()
{
    ArrangeBoxes();
    
    NewGame();
}

main();