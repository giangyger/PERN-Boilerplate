# PERN-Boilerplate
Typescript PERN stack boilerplate with redux, redux-saga and sequelize

## Folder Structure
```
lib
public
src
└── client
   ├── api
   ├── assets
   ├── components
   ├── misc
   ├── navigation
   ├── redux
   ├── utils
   └── views
└── common
└── server
   ├── db
   ├── middleware
   ├── misc
   ├── routers
   └── utils
```
**lib:** The compiled express server is stored in this folder and run from the *server.js* file within.  
**public:** Webpack outputs all files into this folder. After running the build process it can be served e.g with nginx.

**client**: This is the React front-end.  
**common**: Files can be shared here between the react and server application.  
**server**: This is the Express back-end.
## Features
* Axios
* Express
* Helmet
* Redux
* Redux Saga
* Sequelize (with postgres)
* Typescript

## Scripts
**clean** - clean and reinstall npm packages  
**build:check:** - check all typescript files  
**build:server:** - build the server to the lib folder  
**build:webpack:** - build the react fron-end to the public folder  
**build** - build the server and react app  
**start:server:** - start the express dev-server on port 5000   
**start:webpack:** - start the react dev-server on port 3000  
**start** - start both dev-servers  
