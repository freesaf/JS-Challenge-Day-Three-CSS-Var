    // get the img and the span element 
let image = document.querySelector('img');
let title = document.querySelector('.hl');

    // add event listener on all the inputs to listen for change
document.querySelector('#spacing').addEventListener('change',()=>{
    let spaceValue=  document.querySelector('#spacing').value;
    image.style.borderWidth = `${spaceValue}px`;
})

document.querySelector('#blur').addEventListener('change',()=>{
    let blurValue=  document.querySelector('#blur').value;
    image.style.filter = `blur(${blurValue}px)`;    
})

document.querySelector('#base').addEventListener('change',()=>{
    let colorValue=  document.querySelector('#base').value;
    image.style.borderColor = `${colorValue}`;
    title.style.color = `${colorValue}`;    
})
