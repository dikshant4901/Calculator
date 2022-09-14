let str='';
let btns=document.querySelectorAll('button');
let input=document.querySelector('input');
for(let btn of btns)
{
    btn.addEventListener('click',function()
    {
        let btnText=btn.innerText;
        if(btnText==='AC')
        {
            str='';
            input.value='';
        }
        else if(btnText==='=')
        {
            try{
                input.value=eval(str);
            }catch{
                input.value='INVALID';
            }
            str='';
        }
        else{
            str+=btnText;
            input.value=str;
        }

    })
}