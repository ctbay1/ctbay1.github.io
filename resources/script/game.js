const game_start_block = document.getElementById('start_game');
const game_grid        = document.getElementById('game_grid');
const restart_button   = document.getElementById('restart_button');
const hide_letters_but = document.getElementById('hide_letters');
const letter_in_but    = document.getElementById('letter_in_button');

const boxes       = document.getElementsByClassName('box');
const box_nums    = 9;
const box_letters = document.getElementsByClassName('box_letter');

let rand_box_list    = [];
let control_box_list = [];
let level            = 1;

function generate_rand_num(){
    return Math.floor(Math.random()*box_nums);
}

function change_color(num){
    boxes[num].style.backgroundColor = '#CF5F44';
}

function reset_color(num){
    boxes[num].style.backgroundColor = '#2F5C9E';
}

function box_clicked_color(box_int){
    boxes[box_int].style.backgroundColor = '#84CF1B';
}

for (let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click',()=>{
        box_clicked_color(i);
    })
}

function reset_all(){
    for (let i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = '#2F5C9E'
    }
    rand_box_list    = [];
    control_box_list = [];
}

function create_rand_box_list(lim){
    let box_list = [];
    for (let i=0; i<lim+1; i++){
        let rand_num = generate_rand_num();
        if (box_list.includes(rand_num) === false){
            box_list.push(rand_num);
        }
        else{
            while(box_list.includes(rand_num)){
                rand_num = generate_rand_num();
            }
            box_list.push(rand_num);
        }
    }
    return box_list;
}

function highlight_boxes(box_num){
    setTimeout(()=>{
        change_color(box_num);
    },1000);
    setTimeout(()=>{
        reset_color(box_num)
    },2000);
}

/*******************************/

function compare_box_lists(){
    if (rand_box_list.join('') === control_box_list.join('')){
        window.alert(`Level ${level} clear!`);
        level++;
        if (level === 10){
            window.alert(`Congratulations, you've cleared the game! You must be a smart person! Would you like to restart? Going back to the Level 1.`)
            reset_all();
            level = 1;
            play_game(1);
        }else{
            reset_all();
            play_game(level);
        }
    }
}

for (let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click',()=>{

        if (control_box_list.includes(i) === false){ 
            control_box_list.push(i);
            //console.log(control_box_list);
        }
        compare_box_lists();
    });
}

function play_game(level){

    rand_box_list = create_rand_box_list(level - 1);
    //console.log(rand_box_list);
    for (let i=0; i<rand_box_list.length; i++){
        setTimeout(()=>{
            highlight_boxes(rand_box_list[i]);
        },1000*i);
    }
}

/*******************************/

function hide_start_block(){
    if (game_grid.hidden === true){
        game_grid.hidden = false;
        game_start_block.hidden = true;

        play_game(level);
    }
}

game_start_block.addEventListener('click',hide_start_block);

function restart_game(){
    reset_all();
    level = 1;
    play_game(1);
}

restart_button.addEventListener('click',restart_game);

function hide_letters(){
    for (let i=0; i<box_letters.length; i++){
        if (box_letters[i].style.visibility != 'hidden'){
            box_letters[i].style.visibility = 'hidden';
        }else{
            box_letters[i].style.visibility = 'visible';
        }
        
    }
    if (letter_in_but.style.visibility != 'hidden'){
        letter_in_but.style.visibility = 'hidden';
    }else{
        letter_in_but.style.visibility = 'visible';
    }
}

hide_letters_but.addEventListener('click',hide_letters);
