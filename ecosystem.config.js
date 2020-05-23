module.exports = {
  apps: [{
    name: 'react-template',
    script: 'yarn start',
    instances: 1,
    autorestart: true,
    // watch: ['vue.config.js'],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
  }],
};
