'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//     // had enabled by egg
//     // static: {
//     //   enable: true,
//     // }
// };

// config/plugin.js
exports.mysql = {
    enable: true,
    package: 'egg-mysql'
};

//跨域
exports.cors = {
    enable: true,
    package: 'egg-cors'
};
