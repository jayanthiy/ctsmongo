# Mongo Coverage

    Installation and Setup
        1. MongoDB - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
        2. Clients - GUI client
            a. Robo Mongo: https://robomongo.org/
            b. Mongo Booster: https://mongobooster.com/
            c. NoSQL Manager: https://www.mongodbmanager.com/download
        3. VisualCode - https://code.visualstudio.com/
        4. NodeJS - https://nodejs.org/en/
        5. Postman(REST API testing) - https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en


    Differences with Relational DB's
    Tables - Collections

    Mongo Client - mongo command line
    GUI Client - Robomongo

    Javascript Primier:
        Not strongly typed.
        Primitives: String, Numbers, Boolean, Objects
        Functions are first class objects in Javascript
        No classes in browser-compatible version of JS - ES5
        JSON
            - JS object with some rules
            - Valid JSON, keys in quotes ", string in ""

    NodeJS to connect to Mongo DB, basic crud.
        NodeJS is JS program that can run on server side
        MongoDB as package: npm install <package>
        Run NodeJS program: node <file>
        Expose a REST API for our data

    MEAN/MERN stack
        MEN - Mongo Express Node
        Mongodb - Persistence
        Node and Express - Server Side programs
        Angular/React - UI

    Importing Data into Mongo
        JSON
            https://docs.mongodb.com/manual/tutorial/aggregation-zip-code-data-set/ 
            MongoExpress to load JSON data into collections
        CSV
            import northwind database:  https://northwinddatabase.codeplex.com/
            mongoimport -d Northwind -c "categories" --type csv --file "cagtegories.csv" --headerline
        Javascript
            for(var i=0; i<1000;i++) { db.person.insertOne(obj)}
    Basic Queries in Mongo
        Find Queries
        db.collection.find({QUERY}, {FIELDS TO SELECT})


    • Install and run MongoDB on Linux \ Windows
    • Connect to MongoDB database 
    • Use the Mongo shell
    • NodeJS with MongoDB
    • Describe CRUD

    • Describe MongoDB  
    • Key features of MongoDB
    • Data Model Design 
    • Write documents in MongoDB
    • Read and aggregate data
    • Update and delete queries
    • Indexes – Single and Compound 
    • Understand Query Optimization 
    • Replication 


