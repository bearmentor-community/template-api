# ⭕ Template API

> Template API is a quick starter kit project to build a complete API using Node.js and Express.

[![Website](https://img.shields.io/website-up-down-green-red/https/api.template.azobu.com.svg)](https://api.template.azobu.com)
[![CircleCI Status](https://circleci.com/gh/azobu-projects/template-api.svg?style=svg)](https://circleci.com/gh/azobu-projects/template-api)
![License](https://img.shields.io/github/license/azobu-projects/template-api)

The complete list of all features are located at [`azobu-projects/template`](https://github.com/azobu-projects/template) or live on [template.azobu.com](https://template.azobu.com/about).

## Table of Contents

- Introduction
- [Repositories](#repositories)
- [Tech Stack](#tech-stack)
- [Application Structure](#application-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Setup Environment Variables](#setup-environment-variables)
  - [Run](#run)
  - [Lint](#lint)
  - [Test](#test)
  - [Deployment](#deployment)

## Repositories

You should clone all of the required repositories:

- [`template`](https://github.com/azobu-projects/template)
- [`template-web`](https://github.com/azobu-projects/template-web)
- [`template-api`](https://github.com/azobu-projects/template-api)

## Tech Stack

All the backend/API dependencies sorted by priority:

- Git — Distributed version control system
  - GitHub — Provides hosting for software development and version control using Git
- JavaScript — The primary programming language
  - Node.js — JavaScript runtime environment and package manager
  - npm, Yarn — JavaScript runtime environment and package manager
- REST API — REpresentational State Transfer, architectural style for distributed hypermedia systems
- Nodemon — Tool to automatically restart Node application when file changes
- PM2 — Process manager for Node.js
  - [PM2.IO](https://pm2.io) — (PM2+ Monit) Monitor PM2 instances
- Express — Minimal and flexible Node.js web application framework
- MongoDB — Cross-platform document-oriented database program
  - Mongoose — Schema-based Object-Data Modeling (ODM) for MongoDB
- PostgreSQL — Relational database management system with SQL
  - Sequelize — Promise-based Node.js Object-Relational Mapper (ORM) for SQL-related databases
- `dotenv-flow` — Loader for multiple environment variable files
- `morgan` — HTTP request logger middleware for Node.js
- `multer` — Express middleware for handling `multipart/form-data`
- `cors` — Express middleware that to enable CORS with various options
- `bcrypt` — Library to hash passwords
- `crypto` — JavaScript library of crypto standards
- Helmet — Secure Express app by setting various HTTP headers
- JSON Web Token (JWT) — Compact URL-safe means of representing claims
  - `jsonwebtoken` — JWT implementationm, symmetric and asymmetric
- HTTPie — Command-line HTTP client that will make you smile
- ESLint — Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
  - Prettier — Opinionated code formatter and extension for code editor
  - Standard — JavaScript style guide, linter, and formatter
- Google Cloud Platform (GCP) — Suite of cloud computing services that runs on the same infrastructure that Google uses internally
  - Google Compute Engine (GCE) — Configurable virtual machines running in Google's data centers
  - Google Cloud Storage — RESTful online file storage web service for storing and accessing data
- Alternative of GCP:
  - Heroku — Cloud platform as a service supporting several programming languages
- Nginx — High-performance HTTP web server, load balancer, and reverse proxy
- Let's Encrypt — Free SSL/TLS Certificates to enable HTTPS
  - Certbot — Automatically enable HTTPS on your website by deploying Let's Encrypt certificates
- Circle CI — Intelligent and user-friendly Continuous Integration and Deployment (CI/CD)
- Cloudflare — Enterprise-grade authoritative DNS service
- Uniregistry — Retail domain name registrar

Alternative future dependencies:

- Postman - The collaboration platform for API development
  - `newman` - CLI companion for Postman
- Alternative of REST API:
  - GraphQL API — Data query and manipulation language for APIs
    - Apollo — Data graph platform to unify APIs, microservices, and databases with GraphQL
- `slug` — Encode string into URL-friendly format
- Jest — Delightful JavaScript testing framework
- Sinon — Standalone test spies, stubs and mocks for JavaScript
- TypeScript — Typed JavaScript at application-scale JavaScript
- Passport — Simple, unobtrusive authentication for Node.js.
- OAuth — Open standard for access delegation
  - GitHub OAuth
  - Google OAuth
- Redis — In-memory data structure store used as a database, cache and message broker
- Alternative of Circle CI:
  - GitHub Actions — Automate, customize, and execute workflows right in GitHub
  - Travis CI — Hosted CI service used to build and test software projects
  - Jenkins — Automation server to support building, deploying and automating any project
- Docker — Virtualization to deliver software in packages called containers
  - Docker Compose — Provides a way to document and configure all of the app service dependencies

Never be dependencies:

- Other non-JavaScript family languages
- Other non-Express frameworks

For dependencies in the Web part, [see `template-web`](https://github.com/azobu-projects/template-web).

## Application Structure

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

There are various dotfiles related to environment variables, ESLint, Git ignore, Heroku, nvm, Prettier, and Travis CI.

## Getting Started

### Installation

Install dependencies using `yarn`:

```sh
yarn
```

### Setup Environment Variables

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

### Deployment

- Setup domain on Uniregistry.
- Setup DNS on Cloudflare.
- Setup server on Google Compute Engine using `f1-micro` (1 vCPU, 0.6 GB memory).
  - Not Google App Engine, as we need the database in it but not using DBaaS.
  - If you need more power, use `g1-small` (1 vCPU, 1.7 GB memory).
- (Optional) Setup storage server on Google Cloud Storage.
  - By default the upload API fallbacks to `public/uploads` folder.
- Setup Node.js toolchain and databse in the desired server instance.
- Run PM2 deploy scripts:
  - `yarn pm2:deploy:setup`
  - `yarn pm2:deploy`

## Authors

- [M Haidar Hanif](https://mhaidarhanif.com) ([@mhaidarh](https://github.com/mhaidarh))
- [Azobu Team](https://azobu.com) ([@azobu](https://github.com/azobu))

## License

See [LICENSE](./LICENSE)
