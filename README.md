# YuriKureScoreApp

YuriKure score calc app

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deployment

- This application assumes to be depployed on pure-static web site.
  - To achieve it, dynamic routing is not used in whole project and using GET parameter like host.name/some/?param
- In production, it is deployed on AWS S3 static web site hosting.
- All deployment on production is done by Google Cloud Build. See cloudbuild.yaml to know details.

## Directory structure

Inheriting nuxt.js directory structure.

- db
  - DB(Firestore) access layer
- functions
  - static, no side-effect functions

## LICENSE

See LICENSE file.
