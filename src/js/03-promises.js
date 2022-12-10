import Notiflix from 'notiflix';
const form=document.querySelector('.form');
const delayInput=document.querySelector('[name="delay"]');
const stepInput=document.querySelector('[name="step"]');
const amountInput=document.querySelector('[name="amount"]');
const submitBtn=document.querySelector('[type="submit"]');

form.addEventListener("submit", onformSubmit);

function onformSubmit(e){
  e.preventDefault();
  let delay=Number(delayInput.value);
  let step=Number(stepInput.value);
  let amount=Number(amountInput.value);

  for(let i=0; i<amount; i+=1){
    createPromise({position:i, delay:delay}).then(right=>Notiflix.Notify.success(right))
    .catch(error=>Notiflix.Notify.failure(error));
    delay+=step;
  }
}

const createPromise=({position,delay})=>{
  return new Promise((resolve,reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if(shouldResolve){
        resolve(`🟩 Fulfilled promise ${position}in ${delay} ms`);
      }
      else{
        reject(`🟥 Rejected promise ${position} in ${delay} ms`);
      }
    },delay);
  });
};


