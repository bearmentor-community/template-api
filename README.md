# ⭕ Template API

> [Template API](https://api.template.azobu.com) is a quick starter kit project to build a complete API using Node.js and Express.

[![Website](https://img.shields.io/website-up-down-green-red/https/api.template.azobu.com.svg)](https://api.template.azobu.com)
[![CircleCI Status](https://circleci.com/gh/azobu-projects/template-api.svg?style=svg)](https://circleci.com/gh/azobu-projects/template-api)
![License](https://img.shields.io/github/license/azobu-projects/template-api)

| Template API                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [![API](https://raw.githubusercontent.com/azobu-projects/template/master/screenshots/template-api.jpg)](https://api.template.azobu.com) |
| [api.template.azobu.com](https://api.template.azobu.com)                                                                                |

The complete list of all features are located at [`azobu-projects/template`](https://github.com/azobu-projects/template) or live on [template.azobu.com](https://template.azobu.com/about).

## Table of Contents

- [📦 Repositories](#-repositories)
- [🧱 Tech Stack](#-tech-stack)
- [🏛️ Application Structure](#-application-structure)
- [🏁 Getting Started](#-getting-started)
  - [Installation](#installation)
  - [Setup Environment](#setup-environment)
  - [Run](#run)
  - [Lint](#lint)
  - [Test](#test)
  - [Deployment](#deployment)
- [👤 Authors](#-authors)
- [🤝 Contribution](#-contribution)
- [🎁 Support](#-support)
- [📝 License](#license)

## 📦 Repositories

You should clone all of the required repositories:

- [`template`](https://github.com/azobu-projects/template): Main documentation and design
- [`template-web`](https://github.com/azobu-projects/template-web): Frontend application
- [`template-api`](https://github.com/azobu-projects/template-api): Backend application

## 🧱 Tech Stack

### Primary

All the backend/API dependencies sorted by priority:

- [**Git**]() — Distributed version control system
  - [**GitHub**]() — Provides hosting for software development and version control using Git
- [**JavaScript**]() — The primary programming language
  - [**Node.js**]() — JavaScript runtime environment and package manager
  - [**npm**]() — **Node.js** package manager
  - [**yarn**]() — Alternative of **npm**
- [**REST API**]() — REpresentational State Transfer, architectural style for distributed hypermedia systems
- [**Nodemon**]() — Tool to automatically restart **Node.js** application when file changes
- [**PM2**]() — Process manager for **Node.js**
  - [**PM2.IO**](https://pm2.io) — PM2+ Monit to monitor PM2 instances (formerly named Keymetrics)
- [**Express**]() — Minimal and flexible **Node.js** web application framework
- [**MongoDB**]() — Cross-platform document-oriented database program
  - [**Mongoose**]() — Schema-based Object-Data Modeling (ODM) for MongoDB
- [**PostgreSQL**]() — Relational database management system with SQL
  - [**Sequelize**]() — Promise-based **Node.js** Object-Relational Mapper (ORM) for SQL-related databases
  - (Alternative) Other ORM-related:
    - [**TypeORM**]() — ...
- [**`dotenv-flow`**]() — Loader for multiple environment variable files
- [**`morgan`**]() — HTTP request logger middleware for **Node.js**
- [**`multer`**]() — Express middleware for handling `multipart/form-data`
- [**`cors`**]() — Express middleware that to enable CORS with various options
- [**`bcrypt`**]() — Library to hash passwords
- [**`crypto`**]() — JavaScript library of crypto standards
- [**Express Helmet**]() — Secure Express app by setting various HTTP headers
- [**JSON Web Token (JWT)**]() — Compact URL-safe means of representing claims
  - [**`jsonwebtoken`**]() — JWT implementationm, symmetric and asymmetric
- [**HTTPie**]() — Command-line HTTP client that will make you smile
- [**Nodemailer**]() — Module for Node.js to send emails
  - [**Mailgun**]() — Transactional email API service for developers
- [**Sentry**]() — Application monitoring and error tracking software
- [**LogRocket**]() — Logging and Session Replay for JavaScript Apps
- [**ESLint**]() — Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
  - [**Prettier**]() — Opinionated code formatter and extension for code editor
  - [**Standard**]() — JavaScript style guide, linter, and formatter
- [**Google Cloud Platform (GCP)**]() — Suite of cloud computing services that runs on the same infrastructure that Google uses internally
  - [**Google Compute Engine (GCE)**]() — Configurable virtual machines running in Google's data centers
  - [**Google Cloud Storage**]() — RESTful online file storage web service for storing and accessing data
- [**Nginx**]() — High-performance HTTP web server, load balancer, and reverse proxy
- [**Let's Encrypt**]() — Free SSL/TLS Certificates to enable HTTPS
  - [**Certbot**]() — Automatically enable HTTPS on your website by deploying Let's Encrypt certificates
- [**Circle CI**]() — Intelligent and user-friendly Continuous Integration and Deployment (CI/CD)
- [**Cloudflare**]() — Enterprise-grade authoritative DNS service
- [**Uniregistry**]() — Retail domain name registrar

### Alternative

Alternative or future dependencies:

- Alternative of REST API:
  - [**GraphQL API**]() — Data query and manipulation language for APIs
    - [**Apollo**]() — Data graph platform to unify APIs, microservices, and databases with GraphQL
- [**Postman** - The collaboration platform for API development
  - `newman` - CLI companion for Postman
- `slug` — Encode string into URL-friendly format
- Alternative of **Google Cloud Platform**:
  - [**Amazon Web Services**]() — Reliable, scalable, and inexpensive cloud computing services by Amazon
  - [**Heroku**]() — Cloud platform as a service supporting several programming languages
- Alternative of mail services:
  - [**Amazon SES**]() — Cost-effective, flexible, and scalable email service by Amazon
  - [**Postmark**]() — Transactional email service with exceptional delivery
- [**Jest**]() — Delightful JavaScript testing framework
- [**Sinon**]() — Standalone test spies, stubs and mocks for JavaScript
- [**TypeScript**]() — Typed JavaScript at application-scale JavaScript
- [**Passport**]() — Simple, unobtrusive authentication for Node.js.
- [**OAuth**]() — Open standard for access delegation
  - GitHub OAuth
  - Google OAuth
- [**Redis**]() — In-memory data structure store used as a database, cache and message broker
- Alternative of Circle CI:
  - [**GitHub Actions**]() — Automate, customize, and execute workflows right in GitHub
  - [**Travis CI**]() — Hosted CI service used to build and test software projects
  - [**Jenkins**]() — Automation server to support building, deploying and automating any project
- [**New Relic**]() — Single source of truth for infrastructure monitoring, APM agents, browser monitoring, and logging
- [**Docker**]() — Virtualization to deliver software in packages called containers
  - [**Docker Compose**]() — Provides a way to document and configure all of the app service dependencies

### Avoided

Never be dependencies:

- [**Other non-JavaScript family languages**
  - Avoid PHP, Python, Ruby, Golang, and others. Template API is scope limited to JavaScript or TypeScript ecosystem. For that other matters it's better to create different repositories.
- [**Other non-Express frameworks**
  - Avoid Hapi and non-familiar ones, or too raw (such as only `http` package).
- [**Database as a Service (DBaaS) or unnecessary 3rd party services**
  - Avoid mLab, MongoDB Atlas, Heroku Postgres as they have limitations on free tier

### Known Limitations

- The JWT is still just an `accessToken`, there's no `refreshToken` yet.
- Uploaded files are stored into disk or file system to make it simple for now.
- No API versioning yet.

## 🏛️ Application Structure

```sh
template-api
├── LICENSE    # License
├── README.md  # Documentation
├── app.json   # Heroku-related file
├── docs       # Documentation files to be used with HTTP CLient in VS Code
├── ecosystem.config.js  # PM2 configuration
├── jest.config.js       # Jest configuration
├── package.json         # Node.js package configuration
├── postinstall.sh       # Script to be run after dependencies installation
├── public           # Public assets
│   ├── avatars      # Default avatar images
│   ├── favicon.ico  # Favicon
│   ├── images       # Default miscellaneous images
│   └── uploads      # Uploaded files/contents from the client-side
├── src
│   ├── app.js    # Primary Express application configuration
│   ├── *.test.js # Test file for particular file
│   ├── config    # Mostly database configuration
│   ├── index.js  # Entry point for the Node.js application
│   ├── routes    # Multiple routes configuration
│   │   └── route
│   │       ├── index.js     # Express Router configuration
│   │       ├── middlewares  # Express middlewares for specific route
│   │       ├── model.js     # Mongoose model for specific resource
│   │       └── seed.json    # Initial seed data to be used with the model
│   └── utils  # Various utility functions
└── yarn.lock  # Lock version of dependencies
```

There are various dotfiles related to environment variables, Prettier, ESLint, Git ignore, Circle CI, Heroku, nvm, and Travis CI.

## 🏁 Getting Started

### Installation

Install dependencies using `yarn`:

```sh
yarn
```

This will automatically run `postinstall.sh` script which creates `.env.*.local` files which also can be run with `yarn postinstall`.

You should also install and run `template-web` before continuing if you want to make sure the API is properly connected.

### Setup Environment

You can setup the environment variables separately between global, development, and production.

For global config, edit `.env.local` file:

```sh
SERVER_USER=username
SERVER_HOST=10.20.30.40
```

For development, edit `.env.development.local` file:

```sh
EXPRESS_APP_API_URL=http://localhost:3000
EXPRESS_APP_WEB_URL=http://localhost:8000
EXPRESS_APP_MONGODB_URI=mongodb://localhost:27017/database_name
EXPRESS_APP_API_KEY=change_the_api_key
EXPRESS_APP_JWT_SECRET=change_the_jwt_secret
```

For production, edit `.env.production.local` file:

```sh
EXPRESS_APP_API_URL=https://api.template.azobu.com
EXPRESS_APP_WEB_URL=https://template.azobu.com
EXPRESS_APP_MONGODB_URI=mongodb://username:password@host:port/database_name
EXPRESS_APP_API_KEY=change_the_api_key
EXPRESS_APP_JWT_SECRET=change_the_jwt_secret
```

For deployment purpose from local machine using PM2 without CI/CD, edit `.env.local` file:

```sh
SERVER_USER=theusername
SERVER_HOST=100.200.300.400
```

### Run

```sh
yarn dev
```

Access the API on <http://localhost:3000>.

### Run with PM2

```sh
yarn pm2:dev
# or
yarn pm2:prod
```

List process:

```sh
yarn pm2:list
```

Display logs:

```sh
yarn pm2:logs
```

Flush logs:

```sh
yarn pm2:flush
```

Stop all process:

```sh
yarn pm2:stop
```

Delete all process:

```sh
yarn pm2:delete
```

### Lint

```sh
yarn lint
```

To fix basic issues:

```sh
yarn lint --fix
```

### Test

```sh
yarn test
```

Watch for changes:

```sh
yarn test:watch
```

Generate coverage:

```sh
yarn test:coverage
```

### Deployment

- Setup a domain on Uniregistry.
- Setup name servers to connect the domain to Cloudflare.
- Setup server instance on Google Compute Engine using `f1-micro` (1 vCPU, 0.6 GB memory).
  - Not using Google App Engine or DBaaS, as we need the database in the same server to reduce complexity.
  - If you need more power, use `g1-small` (1 vCPU, 1.7 GB memory).
- (Optional) Setup storage server on Google Cloud Storage.
  - By default the upload API fallbacks to file system into `public/uploads` folder.
- Setup Node.js toolchain, databases (MongoDB and PostgreSQL), PM2, Nginx reverse proxy, and TLS certificates for HTTPS.
  - Connect DNS to the server with A record.
- Setup CI/CD with Circle CI.
  - Connect GitHub repo to Circle CI.
  - Make sure to configure the environment variables with the correct `SERVER_USER` and `SERVER_HOST`.
  - Make sure the SSH key from the server configured into Circle CI.
- Run PM2 deploy scripts that connect to the server via SSH.
  - Make sure to configure `.env.local` with the correct `SERVER_USER` and `SERVER_HOST`.
  - `yarn pm2:deploy:setup`
    - Should clone the repo into `/var/www/template-api`.
  - `yarn pm2:deploy`
    - Should pull latest changes and `startOrRestart` Node.js server.

## 👤 Authors

- [M Haidar Hanif](https://mhaidarhanif.com) ([@mhaidarh](https://github.com/mhaidarh))
- [Azobu Team](https://azobu.com) ([@azobu](https://github.com/azobu))

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!

## 🎁 Support

Give a ⭐️ if this project helped or inspired you!

## 📝 License

See [LICENSE](./LICENSE)
