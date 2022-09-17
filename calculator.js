const buttons=document.querySelectorAll('.button');
const input=document.querySelector('.ipt');
buttons.forEach(button=>{
button.addEventListener('click',(e)=>{
if(button.innerText=='C'){
    input.value="";
}else if(button.innerText=='X'){
   let t =String(input.value).slice(0,-1);
input.value=t;
console.log(t);

}else if(button.innerText=='='){
  input.value=eval(input.value);
}else{
    input.value+=button.innerText;
}

});
})
