const digits = document.querySelectorAll(".digit")
const checkDate = new Date()
const thisYear = checkDate.getFullYear();
const message = document.querySelector("h2")
const container = document.querySelector(".container")
let birthday = new Date(`July 10, ${thisYear} 00:00:00`);

checkDate > birthday? birthday = new Date(`July 10, ${thisYear+1} 00:00:00`) : null

function refresh(){
    let today = new Date();
    let duration = birthday - today;
    let seconds = Math.floor(duration / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let days = Math.floor(hours / 24)

    hours = hours - (24 * days)
    minutes = minutes - (days * 24 * 60) - (hours * 60)
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)

    let timerArr = [days, hours, minutes, seconds]

    timerArr.forEach(function(item, index, array){
        item = item.toString();
        return item.length ===1? array[index] = "0"+item : array[index] = item.toString();
    })

    digits.forEach(function(item, index){
        item.innerText = timerArr[index]
    })
}

function checkBirthday(){
    const today = [checkDate.getMonth(), checkDate.getDate()];
    const birthdayArr = [birthday.getMonth(), checkDate.getDate()];
    if(today.join(" ")===birthdayArr.join(" ")){
        message.style.display = "unset";
        container.style.display = "none";
    }else{
        setInterval(refresh, 1000)
    }
}

checkBirthday()
