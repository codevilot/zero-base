const liveServer = require('live-server');
const getArgv = require('./helpers/getArgv');

const defaultParams = {
  host: 'localhost',
  port: 3000,
  root: './public',
  open: false,
<<<<<<< HEAD
=======
  watch: './public',
>>>>>>> 602719ed792855ae344c6d167e8bc3822b1c7172
  mount: [
    ['/api', './server/api'],
    ['/assets', './server/assets'],
  ],
};

const userParams = getArgv();

<<<<<<< HEAD
// const params = { ...defaultParams, ...userParams };
=======
>>>>>>> 602719ed792855ae344c6d167e8bc3822b1c7172
const params = Object.assign({}, defaultParams, userParams);

liveServer.start(params);
