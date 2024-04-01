const endDate = "27 July 2024 11:28:51 PM"

document.getElementById("end-date").innerText = endDate
const input = document.querySelectorAll("input");

function clock(){

    const  end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0) return;
     // covert int0 days
     input[0].value = Math.floor(diff / 3600 / 24);

     // covert int0 Hours
     input[1].value = Math.floor(diff / 3600 ) % 24;

     // covert int0 Minutes
     input[2].value = Math.floor(diff / 60 ) % 60;

     // covert int0 Seconds
     input[3].value = Math.floor(diff) % 60;
    
}



// init call
clock();


/**1 day = 24 hr
 * 1 hr = 60 min
 * 60 min = 3600 sec
 */

setInterval(
    () =>{
        clock()
    },1000
)


