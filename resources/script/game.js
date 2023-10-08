let game_start_block = document.getElementById('start_game');
let game_grid        = document.getElementById('game_grid');

function hide_start_block(){
    game_grid.hidden = false;
    game_start_block.hidden = true;
}

game_start_block.addEventListener('click',hide_start_block);

// game code

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

setTimeout(change_color,3000);
setTimeout(reset_color,4000);

/*
if (game_grid.hidden === false){
    let i = generate_rand_num();   
    boxes[i].style.backgroundColor = '#829E28';
}*/

//