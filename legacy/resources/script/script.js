let title_blocks   = document.getElementsByClassName('title');
let section_blocks = document.getElementsByClassName('section');

function disp_sec_blocks(num){

    if (section_blocks[num].hidden === true){
        section_blocks[num].hidden = false;
        title_blocks[num].scrollIntoView({behavior: "smooth"});
    } else{
        section_blocks[num].hidden = true;
    }
}

for (let i=0; i<title_blocks.length; i++){
    title_blocks[i].addEventListener('click',()=>{
        disp_sec_blocks(i);
    });
}