/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: false,
      domainWhiteList: ['http://localhost:8080/', 'http://127.0.0.1:8080/']
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true //允许发cookie
    },
    JWT_SECRET: 'onepiece',
    mysql: {
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'cuiqi123',
        // 数据库名
        database: 'school'
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576574907402_5366';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
