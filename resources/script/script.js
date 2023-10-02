let game_start_block = document.getElementById('start_game');

function hide_start_block(event){
    event.target.style.visibility = 'hidden';
}

game_start_block.addEventListener('click',hide_start_block);