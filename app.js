const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
    `
    <div class="alert-banner">
    <p><strong>Alert:</strong> DO NOT forget to clock in before metrics auto update. Will not update until done.</p>
    <p class="alert-banner-close">x</p>
    </d>
    `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.display += "none";
    }
});

///////////////////// Remove Notificaiton Icon //////////////////////////////

const bell = document.querySelector('.profile-container-bell');
const notification = document.querySelector('.notification-icon');

bell.addEventListener('click', () => {
    notification.style.display = 'none';
})

///////////////////// LINE GRAPH //////////////////////////////

let trafficCanvas = document.querySelector('#traffic-chart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(71, 235, 106, 0.2)',
        borderWidth: 4,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

///////////////////// BAR GRAPH //////////////////////////////

let dailyCanvas = document.querySelector('#daily-chart');

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(71, 235, 106, 0.9)',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions

});

///////////////////// DONUT GRAPH //////////////////////////////

const mobileCanvas = document.querySelector('#mobile-chart');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "# of Users",
        data: [200, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#cf5656',
            '#78CF82',
            '#c7c7c7'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

/////////////////// MESSAGING FORM CHECK  //////////////////////////////

const body = document.querySelector('body');

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const formCheck = document.querySelector('#form-check');

send.addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    if (user.value === "" && message.value === "") {
        formCheck.style.display = 'block';
        formCheck.style.backgroundColor = '#cf5656';
        formCheck.innerHTML =
            `
        <div class="form-banner">
        <p><strong>WAIT: </strong> Please fill out user and message field before sending.</p>
        <p class="alert-banner-close">x</p>
        </div>
            `;
    } else if (user.value === "") {
        formCheck.style.display = 'block';
        formCheck.style.backgroundColor = '#cf5656';
        formCheck.innerHTML =
            `
        <div class="form-banner">
        <p><strong>WAIT: </strong> Please fill out user field before sending.</p>
        <p class="alert-banner-close">x</p>
        </div>
            `;
    } else if (message.value === "") {
        formCheck.style.display = 'block';
        formCheck.style.backgroundColor = '#cf5656';
        formCheck.innerHTML =
            `
        <div class="form-banner">
        <p><strong>WAIT: </strong> Please fill out message field before sending.</p>
        <p class="alert-banner-close">x</p>
        </div>
            `;
    } else {
        formCheck.style.display = 'block';
        formCheck.style.backgroundColor = '#47eb6a';
        formCheck.innerHTML =
            `
        <div class="form-banner">
        <p><strong>SUCCESS: </strong> Message successfully sent to: ${user.value}.</p>
        <p class="alert-banner-close">x</p>
        </div>
            `;
    }
});

formCheck.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        formCheck.style.display = 'none';
    }
});

/////////////////// SETTINGS FORM CHECK  //////////////////////////////

const cancel = document.getElementById('cancel')
const save = document.getElementById("save");
const formSettingsCheck = document.querySelector('#form-settings-check');

save.addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    formSettingsCheck.style.display = 'block';
    formSettingsCheck.style.backgroundColor = '#47eb6a';
    formSettingsCheck.innerHTML =
        `
        <div class="form-banner">
        <p><strong>SETTINGS UPDATED:</strong> You're most recent settings have been applied.</p>
        <p class="alert-banner-close">x</p>
        </div>
            `;
});

formSettingsCheck.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        formSettingsCheck.style.display = 'none';
    }
});

cancel.addEventListener('click', (e) => {
    document.documentElement.scrollTop = 0;
    e.preventDefault();
    formSettingsCheck.style.display = 'block';
    formSettingsCheck.style.backgroundColor = '#cf5656';
    formSettingsCheck.innerHTML =
        `
        <div class="form-banner">
        <p><strong>SETTINGS CANCELLED:</strong> You're most recent settings have been cancelled.</p>
        <p class="alert-banner-close">x</p>
        </div>
            `;
});

formSettingsCheck.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        formSettingsCheck.style.display = 'none';
    }
});