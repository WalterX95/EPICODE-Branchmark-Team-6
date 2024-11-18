let timerData = 60;

    const data = new Chart(document.getElementById("time-right"), {
            labels: ["blue"],
            datasets: [{
                label: 'Timer',
                data: timerData,
                backgroundColor: 'rgb(54, 162, 235)',
                hoverOffset: 4
            }]
     });

     function timer() {
        let timerHTML = document.getElementById("timer-right");
        timerHTML.innerHTML = timerData;
        timerData--;
        console.log(timerData);
        if(timerData === 0) {
           // location.href='result.html';
        }
        return timerData;
     }

    

     setInterval(timer,1000);