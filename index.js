const screen=document.getElementById('screen');
const display=(value)=>{
    if(screen.value==='0')
    screen.value=value;
    else
    screen.value+=value;
}

const clearAll=()=>{
   screen.value=0;
}
const remove=()=>{
    screen.value=screen.value.slice(0,-1);
 }
 const result=()=>{
     screen.value=eval(screen.value);
 }

