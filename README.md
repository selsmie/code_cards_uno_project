# code_cards_uno_project

These instructions will get the project up and running on your local machine for development purposes. The following code will all be done within the server folder.

# Server setup:
```
npm install
```

# Install dependencies (if not already done):
```
npm install body-parser
npm install mongodb
npm install express
npm install cors
```

# Install devDependencies (if not already done):
```
npm install --save-dev nodemon
```

# Add to scripts (if not already done):
In package.json file under "scripts" add:
```
    "server:dev": "nodemon server.js",
    "seeds": "mongo < db/seeds.js"
```

# Seed the database:
```
npm run seeds
```

# Run express (leave running in separate terminal):
```
npm run server:dev
```

