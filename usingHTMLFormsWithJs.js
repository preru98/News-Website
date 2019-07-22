
let buttonVar=document.getElementById('button1');
buttonVar.addEventListener('click',function(){
    alertMessage();
});
function alertMessage(){
    let printVar=document.getElementById('myForm');
    alert(printVar.value);
}

