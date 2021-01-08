This is a E-commerce website, built using javascript, HTML-ejs and CSS. The database used is mongodb atlas.

## Getting Started

### Installing Dependencies

##### To install all the libraries
```bash
npm install
```

## Database Setup

This project uses Mongodb atlas, need to set the environment variables

```bash
export MONGO_USER=<YOUR_DATABASE_USERNAME>
export MONGO_PASSWORD=<YOUR_DATABASE_PASSWORD>
export MONGO_DEFAULT_DATABASE=<YOU_DATABASE_NAME>

```

### Admin user

This project requires a user to be admin inorder to add products. To make a user admin, add a key value pair to the specific user in the database

```
admin:'true'
```

## Running the project

### Local machine
1. To run in development environment    
```
    npm start:dev
 ```
2. To run in production environment
```
    npm start:server
```

### Deployed project URL
```
    https://e-commerce109.herokuapp.com/
```

