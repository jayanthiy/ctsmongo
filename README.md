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
        6. MongoDB command line: mongo


    Differences with Relational DB's
        https://docs.mongodb.com/manual/reference/sql-comparison/
        Tables - Collections

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

    JS capabilities
        Run scripts
        Mongodb Commands db.createCollection()
        https://docs.mongodb.com/manual/reference/method/
        Cursors
        javascript eval()
        https://docs.mongodb.com/manual/reference/method/db.eval/
        Store functions on mongodb server
        https://docs.mongodb.com/manual/tutorial/store-javascript-function-on-server/

    GridFS for Binary data
        MongoExpress IDE 
        Command line
        NodeJS library

    Aggregate functionality working with Aggregate pipeline

    Replication: backup server
    Steps for simple replication:
        1. Start up few instance of mongodb
            mongod --dbpath "repl_one" --port 27017 --replSet "REPLICA_ONE"
            mongod --dbpath "repl_two" --port 27020 --replSet "REPLICA_ONE"
        2. Add the instance as host
            rs.add(HOST:PORT)

    Mongoose ODM - Object to Document Mapping
        http://mongoosejs.com/index.html

    • Install and run MongoDB on Linux \ Windows
    • Connect to MongoDB database 
    • Use the Mongo shell
    • NodeJS with MongoDB
    • Describe CRUD
    • Describe MongoDB  
    • Key features of MongoDB
    • Read and aggregate data
    • Update and delete queries
    • Write documents in MongoDB
    • MEAN stack app

    • Data Model Design 

    • Indexes – Single and Compound 
    • Understand Query Optimization 
    • Replication 
    • MEAN stack app - ODM(Object to Document Mapping), Server Side Validations
 
