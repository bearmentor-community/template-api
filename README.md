# ⚫ Template API

> Template description

## Repositories

You should clone all of the required repositories:

- [`template`](https://github.com/azobu-projects/template)
- [`template-web`](https://github.com/azobu-projects/template-web)
- [`template-api`](https://github.com/azobu-projects/template-api)

## Tech Stack

Sorted by priority:

- JavaScript
- Node.js, npm, Yarn
- Nodemon
- PM2
- Express
- Morgan
- dotenv-flow
- Multer
- MongoDB, Mongoose
- PostgreSQL, Sequelize
- bcrypt
- crypto
- dotenv-flow
- JSON Web Token (JWT)
- Jest
- Sinon
- ESLint
  - Prettier
  - Standard
- Google Cloud Platform
  - Google Compute Engine
  - Google Cloud Storage
- Nginx
- Let's Encrypt, Certbot
- Cloudflare
- Uniregistry

Later:

- TypeScript
- Passport
- OAuth
- Redis
- Docker

## Getting Startedf

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
  - Not Google App Engine, as we need MongoDB on it. Also not using MongoDB Atlas.
  - If you need more power, use `g1-small` (1 vCPU, 1.7 GB memory).
- (Optional) Setup storage server on Google Cloud Storage.

## Authors

- [M Haidar Hanif](https://mhaidarhanif.com) ([@mhaidarh](https://github.com/mhaidarh))
- [Azobu Team](https://azobu.com) ([@azobu](https://github.com/azobu))

## License

See [LICENSE](./LICENSE)
