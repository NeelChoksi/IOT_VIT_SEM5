chartIt();



async function chartIt(){
    const {xTime,yAirQuality,yCO,yHumidity,yTemp,totalEntries} = await getCSVData();
    const AirQualityLine = document.getElementById('AirQualityLine').getContext('2d');
    const AirQualityBar = document.querySelector('.AirQualityBar').getContext('2d');
    // const AirQualityPie = document.querySelector('.AirQualityPie').getContext('2d');
    
    const COLine = document.querySelector('.COLine').getContext('2d');
    const COBar = document.querySelector('.COBar').getContext('2d');
    // const COTemp = document.querySelector('.AirQualityLine').getContext('2d');

    const TempLine = document.querySelector('.TempLine').getContext('2d');
    const TempBar = document.querySelector('.TempBar').getContext('2d');
    // const TempPie = document.querySelector('.AirQualityLine').getContext('2d');

    const HumLine = document.querySelector('.HumLine').getContext('2d');
    const HumBar = document.querySelector('.HumBar').getContext('2d');
    // const HumPie = document.querySelector('.AirQualityLine').getContext('2d');

    const totalEntry = document.querySelector('.totalEntries').textContent = "Total Entries:"+totalEntries;

    const AirQualityLineChart = new Chart(AirQualityLine, {
        type: 'line',
        data: {
            labels: xTime,
            datasets: [{
                label: `Air Quality in PPM(Parts Per Million)`,
                data: yAirQuality,
                backgroundColor:['rgba(255, 99, 132, 0.2)','rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + 'PPM';
                        }
                    }
                }]
            }
        }
    });
    const AirQualityBarChart = new Chart(AirQualityBar, {
        type: 'bar',
        data: {
            labels: xTime,
            datasets: [{
                label: `Air Quality in PPM(Parts Per Million)`,
                data: yAirQuality,
                backgroundColor:['rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgb(54, 162, 235,1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + 'PPM';
                        }
                    }
                }]
            }
        }
    });


    const COLineChart = new Chart(COLine, {
        type: 'line',
        data: {
            labels: xTime,
            datasets: [{
                label: `CO in PPM(Parts Per Million)`,
                data: yCO,
                backgroundColor:['rgba(255, 99, 132, 0.2)','rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + 'PPM';
                        }
                    }
                }]
            }
        }
    });
    const COBarChart = new Chart(COBar, {
        type: 'bar',
        data: {
            labels: xTime,
            datasets: [{
                label: `CO in PPM(Parts Per Million)`,
                data: yCO,
                backgroundColor:['rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgb(54, 162, 235,1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + 'PPM';
                        }
                    }
                }]
            }
        }
    });

    const TempLineChart = new Chart(TempLine, {
        type: 'line',
        data: {
            labels: xTime,
            datasets: [{
                label: `Temperature(°C) vs Time `,
                data: yTemp,
                backgroundColor:['rgba(255, 99, 132, 0.2)','rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + '°C';
                        }
                    }
                }]
            }
        }
    });
    const TempBarChart = new Chart(TempBar, {
        type: 'bar',
        data: {
            labels: xTime,
            datasets: [{
                label: `Temperature(°C) vs Time`,
                data: yTemp,
                backgroundColor:['rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgb(54, 162, 235,1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + '°C';
                        }
                    }
                }]
            }
        }
    });

    const HumLineChart = new Chart(HumLine, {
        type: 'line',
        data: {
            labels: xTime,
            datasets: [{
                label: `Humidity(%) vs Time `,
                data: yHumidity,
                backgroundColor:['rgba(255, 99, 132, 0.2)','rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + '%';
                        }
                    }
                }]
            }
        }
    });
    const HumBarChart = new Chart(HumBar, {
        type: 'bar',
        data: {
            labels: xTime,
            datasets: [{
                label: `Humidity(%) vs Time `,
                data: yHumidity,
                backgroundColor:['rgb(54, 162, 235)',
                'rgb(255, 205, 86)'],
                borderColor: 'rgb(54, 162, 235,1)',
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, values) {
                            return value + '%';
                        }
                    }
                }]
            }
        }
    });



}


async function getCSVData(){
    const xTime = [];
    const yAirQuality = [];
    const yCO = [];
    const yTemp = [];
    const yHumidity = [];

   
    const response = await fetch('airQualityData.csv');
    const data = await response.text();

    console.log(data);

    const columns = data.split(/\n/).slice(0)[0];
    console.log(columns);
    const table = data.split(/\n/).slice(1);
    table.forEach(row=>{
        const columns = row.split(',');
        const date = columns[0];
        const time = columns[1];
        const airQuality = columns[2];
        const CO = columns[3];
        const Humidity = columns[4];
        const Temperature = columns[5];

        xTime.push(time);
        yAirQuality.push(parseInt(airQuality));
        yCO.push(parseInt(CO));
        yHumidity.push(parseFloat(Humidity));
        yTemp.push(parseFloat(Temperature))

        if (airQuality>150){
            unHideEmail();
        }
        

        // console.log(date,time,airQuality,CO,Humidity,Temperature);

    });
    const totalEntries = table.length;
    return {xTime, yAirQuality,yCO,yHumidity,yTemp,totalEntries}
}

function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Air Quality Safe Limit Exceeded",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
}

function unHideEmail(){
    const formBtn = document.querySelector('.styled-button');
    formBtn.classList.add('flex');
}