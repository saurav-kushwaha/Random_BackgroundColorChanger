// generate random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color ='#'
    for(let i = 0; i < 6; i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let getIntervalId;
// definr startChangingcolor function
const startChangingColor = function(){
   if(getIntervalId == null)
    {
     getIntervalId= setInterval(changebgColor,1000);
    }
    function changebgColor(){
     document.body.style.backgroundColor = randomColor();
     }
}

// define stopchangingcolor function
const stopChangingColor = function()
{
    clearInterval(getIntervalId);
    getIntervalId=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)