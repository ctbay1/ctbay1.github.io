function calculate(){

    const res_val = document.getElementById("resistor_vals");
    let result    = document.getElementById("result");

    const calc_button      = document.getElementById('res_calc_button');

    // connection types
    const serial_clicked   = document.getElementById('serial').checked;
    const parallel_clicked = document.getElementById('parallel').checked; 

    result.innerHTML = '0\u{2126}';

    function calc_serial(res_list){
        total_res = 0;
        for (let i=0; i<res_list.length; i++){
            total_res += parseFloat(res_list[i]);
        }
        return total_res;
    }

    function calc_parallel(res_list){
        total_res = 0;
        for (let i=0; i<res_list.length; i++){
            total_res += parseFloat(1 / res_list[i]);
        }
        return 1/total_res;
    }

    function handle_buttonclick(){

        let serial_clicked   = document.getElementById('serial').checked;
        let parallel_clicked = document.getElementById('parallel').checked;

        res_val2list = res_val.value.split(',');

        console.log(serial_clicked)
        if (serial_clicked){
            result.innerHTML = `${calc_serial(res_val2list)}\u{2126}`;
        } else if (parallel_clicked){
            result.innerHTML = `${calc_parallel(res_val2list)}\u{2126}`;
        }
    }

    calc_button.addEventListener('click', handle_buttonclick)


    // ohms calculator variables
    const ohms_calc_button = document.getElementById('ohms_calc_button');
    const ohms_res_button  = document.getElementById('ohms_res_button')
  
 
    function calc_ohms(){
        // input variables
        let voltage_value    = document.getElementById('voltage_val').value;
        let current_value    = document.getElementById('current_val').value;
        let resistance_value = document.getElementById('resistance_val').value;

        //select variables
        let select_volt = document.getElementById('voltage_units').value;
        let select_amps = document.getElementById('current_units').value;
        let select_res  = document.getElementById('ohm_units').value;

        let volt_unit_multip = 1;
        let amp_unit_multip  = 1;
        let res_unit_multip  = 1;

        if (select_volt == 'volts'){
            volt_unit_multip = 1;
        }else if (select_volt == 'milivolts'){
            volt_unit_multip = 1/1000;
        }

        if (select_amps == 'amps'){
            amp_unit_multip = 1;
        }else if (select_amps == 'miliamps'){
            amp_unit_multip = 1 / 1000;
        } else if(select_amps == 'microamps'){
            amp_unit_multip = 1 / 1000000;
        }

        if (select_res == 'ohms'){
            res_unit_multip = 1;
        } else if (select_res == 'kiloohms'){
            res_unit_multip = 1000;
        } else if (select_res == 'megaohms'){
            res_unit_multip = 1000000;
        }

        if (voltage_value == ''){
            voltage_value = ((parseFloat(current_value) * amp_unit_multip) * (parseFloat(resistance_value) * res_unit_multip)) * (1/volt_unit_multip);
            document.getElementById('voltage_val').value = voltage_value;
            
        }
        else if (current_value == ''){
            current_value = ((parseFloat(voltage_value) * volt_unit_multip) / (parseFloat(resistance_value) * res_unit_multip)) * (1/amp_unit_multip);
            document.getElementById('current_val').value = current_value;
        }
        else if (resistance_value == ''){
            resistance_value = ((parseFloat(voltage_value) * volt_unit_multip) / (parseFloat(current_value) * amp_unit_multip)) * (1/res_unit_multip);
            document.getElementById('resistance_val').value = resistance_value;
        }
    }

    function handle_ohms_reset(){
        document.getElementById('voltage_val').value    = '';
        document.getElementById('current_val').value    = '';
        document.getElementById('resistance_val').value = '';

        document.getElementById('voltage_val').placeholder    = '';
        document.getElementById('current_val').placeholder    = '';
        document.getElementById('resistance_val').placeholder = '';
    }

    ohms_calc_button.addEventListener('click', calc_ohms);
    ohms_res_button.addEventListener('click', handle_ohms_reset)
}

calculate();