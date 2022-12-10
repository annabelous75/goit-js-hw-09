import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import notiflix from 'notiflix';

const onInput=document.querySelector('#datetime-picker');
const startBtn=document.querySelector('[data-start]');
const day=document.querySelector('[data-days');
const hour=document.querySelector('[data-hours');
const minute=document.querySelector('[data-minutes]');
const second=document.querySelector('[data-seconds]');

const date=new Date();
let timer=null;
let timeComponent={};

startBtn.addEventListener("click", onclickTimer);
startBtn.disabled=true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      timer=selectedDates[0]-date;
      if(selectedDates[0].getTime()<date.getTime()){
        notiflix.Notify.failure('✖Please choose a date in the future',{
           width:'380px',
           height:'300px',
           position:'right-top',
           messageColor: '#242424',
           buttonBackground: '#ff5549',
           buttonColor: '#fff',
           backOverlayColor: 'rgba(255,85,73,0.2)'
         });
        startBtn.disabled=true;
       }
       else{
         startBtn.disabled=false;
       }
    },
  };

const flatpicekr=flatpickr(onInput,options);

function onclickTimer (){

  setInterval(()=>{
    if(timer<=0){
       return;
    }

    timeComponent=convertMs(timer);
    day.textContent=timeComponent.days.toString().padStart(2,0);
    hour.textContent=timeComponent.hours.toString().padStart(2,0);
    minute.textContent=timeComponent.minutes.toString().padStart(2,0);
    second.textContent=timeComponent.seconds.toString().padStart(2,0);
    timer -=1000;
  },1000);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

