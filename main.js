const digits = document.querySelectorAll(".digit")
const thisYear = new Date().getFullYear();
const birthday = new Date(`July 10, ${thisYear} 00:00:00`);

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

setInterval(refresh, 1000)
