var selectEvent=document.querySelector('select');
var textBoxEvent=document.querySelector('input[type=text]');
var checkBoxEvent=document.querySelector('input[type=checkbox]');
var check,textbox,selectb;
checkBoxEvent.onchange=function(e){
    check=e.target.checked;
   
} console.log(check);
if(check)
{
    console.log('helo');
}
