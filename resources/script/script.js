let game_start_block = document.getElementById('start_game');
let game_grid        = document.getElementById('game_grid');

function hide_start_block(){
    game_grid.hidden = false;
    game_start_block.hidden = true;
}

game_start_block.addEventListener('click',hide_start_block);

const projects_block = document.getElementById('projects_title');
const game_sec       = document.getElementById('game_sec');

function disp_projects_block(){
    game_sec.hidden = false;
}

projects_block.addEventListener('click',disp_projects_block);