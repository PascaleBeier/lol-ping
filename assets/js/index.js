const netPing = require('net-ping');
const session = netPing.createSession();

const serverContainer = document.getElementById('servers');
const pingContainer = document.getElementById('ping');

const servers = [
    {
        name: 'EUW',
        address : '104.160.141.3'
    },
    {
        name: 'NA',
        address: '104.160.131.3'
    },
    {
        name: 'EUNE',
        address: '104.160.142.3'
    },
    {
        name: 'OCE',
        address: '104.160.156.1'
    },
    {
        name: 'LAN',
        address : '104.160.136.3'
    }
];

for (let server of servers) {
    let option = document.createElement('option');
    option.value = server.address;
    option.textContent = server.name;
    serverContainer.appendChild(option);
}

function ping() {
    session.pingHost (serverContainer.options[serverContainer.selectedIndex].value, function (error, target, sent, rcvd) {
        let ms = rcvd - sent;
        if (error)
            if (error instanceof ping.RequestTimedOutError)
                pingContainer.textContent = ` Timeout after ${ms}. You probably shouldn't be queueing.`;
            else
                pingContainer.textContent = ` Error after ${ms}: ${error.toString()}.`;
        else
            pingContainer.textContent = ` is about ${ms}ms`;
    });
}

ping();
serverContainer.addEventListener('change', () => ping());