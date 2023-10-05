let game_start_block = document.getElementById('start_game');
let game_grid        = document.getElementById('game_grid');

function hide_start_block(){
    game_grid.hidden = false;
    game_start_block.hidden = true;
}

game_start_block.addEventListener('click',hide_start_block);
/*
const projects_block = document.getElementById('projects_title');
const game_sec       = document.getElementById('game_sec');

function disp_projects_block(){
    if (game_sec.hidden === true){
        game_sec.hidden = false;
    } else{
        game_sec.hidden = true;
    }
}

projects_block.addEventListener('click',disp_projects_block);*/

let title_blocks   = document.getElementsByClassName('title');
let section_blocks = document.getElementsByClassName('section');

function disp_sec_blocks(num){
    //console.log(num);
    for (let i=num; i<num+1; i++){
        //console.log(i);
        if (section_blocks[i].hidden === true){
            section_blocks[i].hidden = false;
        } else{
            section_blocks[i].hidden = true;
        }
    }
}


for (let j=0; j<title_blocks.length; j++){
    title_blocks[j].addEventListener('click',()=>{
        disp_sec_blocks(j);
    });
}