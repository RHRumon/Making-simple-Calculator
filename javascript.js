const answer = document.getElementById("test");

function appendtodisplay(input){
       answer.value += input;
}

function calculate(){
    /*try{
        answer.value = eval(answer.value);
    }
    catch(error){
        answer.value = "Error";
    } */
    answer.value = eval(answer.value);
   
}

function cleardisplay(){

    answer.value = "";
}