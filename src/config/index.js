if (typeof window === 'undefined') global.window = { location: { host: 'testhost' } }

const maps = {
  'sos-th.firebaseapp.com': 'production',
  'thaisos-dev.firebaseapp.com': 'develop',
}

const host = window.location.host
let found = maps[host]
console.log(found, 'host:', host)
const env = !!found ? found : 'localhost';
export const config = require(`./config.${env}`);
