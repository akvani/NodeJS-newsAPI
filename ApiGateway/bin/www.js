const app = require('../app');

const config = require('../config');

const _port = (config.WWW_PORT || 3000);

app.listen(_port, ()=>{
    console.log("API GateWay app Runs in port of ", _port);
})