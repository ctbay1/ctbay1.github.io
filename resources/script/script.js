let game_start_block = document.getElementById('start_game');
let game_grid        = document.getElementById('game_grid');

function hide_start_block(){
    game_grid.hidden = false;
    game_start_block.hidden = true;
}

game_start_block.addEventListener('click',hide_start_block);