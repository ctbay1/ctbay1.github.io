let game_start_block = document.getElementById('start_game');
let game_grid        = document.getElementById('game_grid');

let boxes = document.getElementsByClassName('box');

function generate_rand_num(){
    return Math.floor(Math.random()*9);
}

let i = generate_rand_num();

function change_color(){
    boxes[i].style.backgroundColor = 'red';
}

function reset_color(){
    boxes[i].style.backgroundColor = '#2F5C9E';
}

function hide_start_block(){
    if (game_grid.hidden === true){
        game_grid.hidden = false;
        game_start_block.hidden = true;

        setTimeout(change_color,2000);
        setTimeout(reset_color,3000);
    }
}

game_start_block.addEventListener('click',hide_start_block);

/*
function play_game(){
    //Level 1
    let level = 1;
    let i = generate_rand_num();
    change_color();
    reset_color();



    //Level 2

}*/


//