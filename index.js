 const button = document.getElementById('button');
 const showMoreModal = document.getElementById('modal');
 const showMoreModalBody = document.getElementById('modal-body');
 const clr1=document.getElementById('clr1');
 const clr2=document.getElementById('clr2');
 const bg=document.getElementById('bg');
const submit=document.getElementById('submit');
const inputs = document.querySelectorAll(".input");
const avatar = document.getElementById('avatar');
const name1 =document.getElementById('name1');
const name2 =document.getElementById('name2');

function bgset (){
    bg.style.background="linear-gradient("+45+"deg,"+ clr1.value +" 12% ,"+ clr2.value +" 12% ,"+ clr2.value +" 23% ,"+ clr1.value +" 23% , 34% , white 34% , white 91% ,"+ clr2.value +" 91% ,"+ clr2.value +" 96% ,"+ clr1.value +" 96%)";
}
const showPopup = (e) => {
    showMoreModal.style.display = 'flex';
}
showMoreModal.addEventListener('click', (e) => {
    if (e.srcElement === showMoreModal)
    {
        showMoreModal.style.display = "none"
    }
})  


    inputs.forEach((i)=>{
        i.addEventListener('click',(e)=>{
            avatar.src=e.target.previousElementSibling.src;
        })   
    })

    const holder=()=>{
        const pic =document.getElementsByClassName('users1');
        pic[0].style.backgroundImage="linear-gradient( 25deg , "+ clr2.value +" 50% , "+ clr1.value +" 50% 100%)";
        pic[1].style.backgroundImage="linear-gradient( 25deg , "+ clr2.value +" 50% , "+ clr1.value +" 50% 100%)";
        pic[2].style.backgroundImage="linear-gradient( 25deg , "+ clr2.value +" 50% , "+ clr1.value +" 50% 100%)";
    }

submit.addEventListener('click',()=>{
    showMoreModal.style.display = "none";
    button.style.border=`3px solid ${clr1.value}`;
    submit.style.border=`3px solid ${clr1.value}`;
    avatar.style.background="linear-gradient("+25+"deg , white 50% , "+ clr1.value +" 50% 100%)";
    holder();
     bgset();
     const comp = name2.value;
     if(comp===""){
     }else{
         name1.innerText = comp;
         name2.value="";
     }
    })
    button.addEventListener('click',showPopup);
    
    button.onmouseover= function(){
        button.style.backgroundColor =`${clr2.value}`; 
    }
    submit.onmouseover= function(){
        submit.style.backgroundColor =`${clr2.value}`; 
    }
    button.onmouseleave= function(){
        button.style.backgroundColor =`transparent`; 
    }
    submit.onmouseleave= function(){
        submit.style.backgroundColor =`transparent`; 
    }
