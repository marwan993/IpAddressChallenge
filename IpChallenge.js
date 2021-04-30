<script>
var ipArray = []
var commonIpArray = [];
var cron = require('node-cron');

function request_handled() {
    fetch('https://api.ipify.org?format=json')
    .then(results => results.json())
    .then(data => ipArray.push(data.ip));

    function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var unique = ipArray.filter(onlyUnique);
var top100Ip = [];

for (let i = 0; i < unique.length; i++) {
    commonIpArray.push(unique[i]); 

}

commonIpArray.slice(Math.max(commonIpArray.length - 100, 0))
    console.log(commonIpArray);
}

function top100() {
    request_handled();
}

function clear() {
    commonIpArray = [];
}

//https://crontab.guru/examples.html to explain in details using cron tasks scheduling
cron.schedule('0 0 * * *', () => {
  clearInterval();
});

</script>

<b>Show IP Addresses:</b>
<input type=button onClick="top100()" value="Generate Ip Addreses">

