const counterContent = document.querySelector('.counter-content');
const counterHeader = document.querySelector('.counter-header');
const counterNumber = document.querySelector('.counter-number');
const addBtn = document.querySelector('.add-btn');
const lowerBtn = document.querySelector('.lower-btn');
let count = 0;

let changeColor = (count) => {
    if(count>0){
        counterNumber.classList.add('greeny');
    }else if(count<0){
        counterNumber.classList.remove('greeny')
        counterNumber.classList.add('redy');
    }else if(count === 0){
        counterNumber.classList.remove('greeny')
        counterNumber.classList.remove('redy');
    }

}



const addme = () => {
    count = count+1;
    changeColor(count);
    counterNumber.textContent = count;

}

const lowerme = () => {
    count = count-1;
    changeColor(count);
    counterNumber.textContent = count;

}




addBtn.addEventListener('click',addme);
lowerBtn.addEventListener('click',lowerme);








