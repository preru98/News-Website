let buttonVar=document.getElementById('submit');
buttonVar.addEventListener('click',function(){
    giveAlert();
});
function giveAlert(){
    let getText=document.getElementById('search');
    alert(getText.value);
}

