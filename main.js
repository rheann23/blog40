function para1(){
    var input = [];  
    for(var i=1 ;i<=6 ; i++){
input.push(document.getElementById("input_" + i).value);
    } 
    document.getElementById("Showpara1").innerHTML = input.join(". ");

}
function para2(){
    var input = [];  
    for(var i=1 ;i<=6 ; i++){
input.push(document.getElementById("input_" + i).value);
    } 
    document.getElementById("Showpara2").innerHTML = input.join(". ");

}