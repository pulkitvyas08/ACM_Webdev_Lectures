var boxes = document.querySelectorAll(".box");
var game_state = document.querySelector("#state");
var h1 = document.querySelector("h1");
var box_num = 6;
var session_color;
var colors = [];

function change_colors(color) 
{
    for (var i = 0; i < boxes.length; i++)
    {
        boxes[i].style.background = color;
    }
}

function set_session_color()
{
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function ArrangeBoxes()
{
    for (var i = 0; i < boxes.length; i++)
    {
        boxes[i].addEventListener("click", function(){
            var choosen_color = this.style.background;
    
            if(choosen_color === session_color)
            {
                game_state.textContent = "Correct!";
                change_colors(choosen_color);
                h1.style.background = choosen_color;
            } 
            else 
            {
                this.style.background = "#0C0808";
                game_state.textContent = "Try Again"
            }
        });
    }
}

function ran_colors(n) 
{
    var rgb_col_arr = []
    for(var i = 0; i < n; i++)
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        rgb_col_arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return rgb_col_arr;
}

var new_game_button = document.querySelector("#new_g");
var show_session_color = document.getElementById("sess_color");
var diff_level = document.querySelectorAll(".diff");

function new_game()
{
    colors = ran_colors(box_num);

    session_color = set_session_color();

    show_session_color.textContent = session_color;
    
    new_game_button.textContent = "New Game";
    game_state.textContent = "";
    
    for(var i = 0; i < boxes.length; i++)
    {
        if(colors[i])
        {
            boxes[i].style.display = "block";
            boxes[i].style.background = colors[i];
        } 
        else 
        {
            boxes[i].style.display = "none";
        }
    }
    
    h1.style.background = "#029AFF";
}

function set_diff_level()
{
    for(var i = 0; i < diff_level.length; i++)
    {
        diff_level[i].addEventListener("click", function(){
            diff_level[0].classList.remove("clicked");
            diff_level[1].classList.remove("clicked");
            
            this.classList.add("clicked");
            
            if(this.textContent == "Easy")
            {
                box_num = 3;
            }
            else
            {
                box_num = 6;
            }
            new_game();
    });
   }
}

new_game_button.addEventListener("click", function(){
      new_game();
});

function main()
{
    set_diff_level();
    ArrangeBoxes();
    new_game();
}

main();