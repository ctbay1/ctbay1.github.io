function second_game(){

    const boxes     = document.getElementsByClassName('box_2');
    const box_texts = document.getElementsByClassName('box_text_2') 

    const box_num          = boxes.length
    const color_codes      = ['#006D77', '#83C5BE', '#EDF6F9', '#FFDDD2', '#E29578', '#ffbc42', '#d81159', '#782C8F']
    const reset_color_code = '#2F5C9E'

    let rand_list    = []
    let control_list = []
    let num_pairs    = 2

    function generate_rand_boxes(){
        rand_num  = Math.floor(Math.random()*box_num)
        for (let i=0; i<box_num; i++){
            if (rand_list.includes(rand_num) === false){
                rand_list.push(rand_num)
            } else {
                while(rand_list.includes(rand_num) === true){
                    rand_num = Math.floor(Math.random()*box_num)
                }
                rand_list.push(rand_num)
            }
        }
    }

    let color_codes_idx = 0
    function assign_color_to_each_box(){
        for (let i=0; i<box_num; i++){
            box_idx = rand_list[i]
            if (i !== 0 && i%num_pairs === 0){
                color_codes_idx += 1
            }
            //boxes[box_idx].style.backgroundColor = color_codes[color_codes_idx]
            //boxes[box_idx].innerHTML = color_codes[color_codes_idx]
            box_texts[box_idx].innerHTML = color_codes[color_codes_idx]
        }
    }

    function compere_boxes(box_list2compare){
        let box_num1 = box_list2compare[0]
        let box_num2 = box_list2compare[1]
        if (box_texts[box_num1].innerHTML === box_texts[box_num2].innerHTML){
            boxes[box_num1].style.backgroundColor = box_texts[box_num1].innerHTML
            boxes[box_num2].style.backgroundColor = box_texts[box_num2].innerHTML

            control_list = [] // reset control list
        } else {
            boxes[box_num1].style.backgroundColor = reset_color_code
            boxes[box_num2].style.backgroundColor = reset_color_code

            control_list = [] // reset control list
        }
    }

    function reveal_clicked_boxcolor(clicked_box){
        setTimeout(()=>{
            boxes[clicked_box].style.backgroundColor = box_texts[clicked_box].innerHTML
        }, 100);
        setTimeout(()=>{
            boxes[clicked_box].style.backgroundColor = reset_color_code
        }, 500);
    }


    function handle_boxclick(box){
        reveal_clicked_boxcolor(box)
        if (control_list.includes(box) === false && control_list.length<num_pairs){
            control_list.push(box)
        }
        console.log(control_list)
        if (control_list.length === 2){
            setTimeout(()=>{
                compere_boxes(control_list)
            }, 1000)
        }
    }

    for (let i=0; i<box_num; i++){
        boxes[i].addEventListener('click', ()=>{
            handle_boxclick(i)
        })
    }

    function play_game_2(){
        generate_rand_boxes()
        assign_color_to_each_box()
    }

    play_game_2()
}

second_game();