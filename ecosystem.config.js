require('dotenv-flow').config()
const meta = require('./package.json')

module.exports = {
  /**
   * Application Configuration
   * http://pm2.keymetrics.io/docs/usage/application-declaration
   */
  apps: [
    {
      name: meta.name,
      script: meta.main,
      node_args: '--harmony',
      watch: [meta.main],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'public'],
      watch_options: { followSymlinks: false },
      env: {
        COMMON_VARIABLE: 'true',
        EXPRESS_APP_API_URL: process.env.EXPRESS_APP_API_URL,
        EXPRESS_APP_WEB_URL: process.env.EXPRESS_APP_WEB_URL,
        EXPRESS_APP_API_KEY: process.env.EXPRESS_APP_API_KEY,
        EXPRESS_APP_MONGODB_URI: process.env.EXPRESS_APP_MONGODB_URI,
        EXPRESS_APP_JWT_SECRET: process.env.EXPRESS_APP_JWT_SECRET,
        EXPRESS_APP_MAILGUN_API_KEY: process.env.EXPRESS_APP_MAILGUN_API_KEY,
        EXPRESS_APP_MAILGUN_DOMAIN: process.env.EXPRESS_APP_MAILGUN_DOMAIN,
        EXPRESS_APP_MAILGUN_SENDER: process.env.EXPRESS_APP_MAILGUN_SENDER
      },
      env_dev: {
        NODE_ENV: 'development'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment
   */
  deploy: {
    staging: {
      user: process.env.SERVER_USER,
      host: process.env.SERVER_HOST,
      ref: 'origin/master',
      repo: meta.repository.url,
      path: '/var/www/template-api/staging',
      'pre-deploy-local': 'echo "Ready to deploy staging app"',
      'post-deploy': 'yarn && pm2 startOrRestart ecosystem.js --env staging',
      env: { NODE_ENV: 'staging' }
    },
    production: {
      user: process.env.SERVER_USER,
      host: process.env.SERVER_HOST,
      ref: 'origin/master',
      repo: meta.repository.url,
      path: '/var/www/template-api/production',
      'pre-deploy-local': '"Ready to deploy production app"',
      'post-deploy': 'yarn && pm2 startOrRestart ecosystem.js --env production',
      env: { NODE_ENV: 'production' }
    }
  }
}
