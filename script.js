const hour = document.querySelector(".hoursText")
const minute = document.querySelector(".minutesText")
const second = document.querySelector(".secondsText")
const appm = document.querySelector(".ampmText")
const dateMonth = document.querySelector(".dateYearMonth")


const clock = () => {
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()

  if(hours == 0){
    hours = 12
    appm.innerHTML = "AM"
  }
  if(hours > 12){
    hours = hours - 12
    appm.innerHTML = "PM"
  }
    if(hours > 0 && hours < 12){
       appm.innerHTML = "AM"
  }

  if(hours < 10){
    hours = "0" + hours
  }
  if(minutes < 10){
    minutes = "0" + minutes
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }

  hour.innerHTML = hours
  minute.innerHTML = minutes
  second.innerHTML = seconds
  
setTimeout(clock,1000)
}
clock()



//date 
  let date = new Date().getDate()
  let month = new Date().getMonth()
  let year = new Date().getFullYear()
  if(month == 0){
    month = "January"
  }
    if(month == 1){
    month = "February"
  }
    if(month == 2){
    month = "March"
  }
    if(month == 3){
    month = "April"
  }
    if(month == 4){
    month = "May"
  }
    if(month == 5){
    month = "June"
  }
    if(month == 6){
    month = "July"
  }
    if(month == 7){
    month = "August"
  }
    if(month == 8){
    month = "September"
  }
    if(month == 10){
    month = "Octobor"
  }
    if(month == 11){
    month = "November"
  }
    if(month == 12){
    month = "December"
  }


dateMonth.innerHTML = ` ${date} ${month} ${year}`
