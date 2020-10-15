Hello World!
Template engines:

        pug (jade) (popular)
        Mustache
        ejs

Query parameters: 
                
        req.query

POST method: 

        req.body (no need body-parser)
        use express 

nodemon: 

        restart the server when your change
        npm start
    
lowdb: 

        lowdb npm

view user: 

         shortid
         find({}).value()

express router: 
         
         use express.Router()

Controller(MVC): 

        extends (path)
        block content

static files: 

        app.use(express('public));

Validation: 

        NEVER TRUST YOUR USERS
        validate user input

middleware: 
        
        Writing middleware for use in Express app

Cookie: 
        
        use cookie-parser

Authentication(login):  in project

md5: 
  
        use md5 npm

signed cookie: in project

Environment variables: 

         dotenv
         never commit .env to github

Debug node.js app:  

        nodemon --inspect index.js
        Dev tool of Chrome

Pagination: 

        items in page n, with x items per page:
        begin = (n-1)*x
        end = (n-1)*x+x = n*x
        Items = array.slice(begin, end)

File Upload: 

        multer

Session: in project

CSRF attack(Cross-site request forgecy): 

        Transfer money form
        csurf
                                         
Install MongoDB: in ubuntu

Mongoose:

        MongoDB tutorial
        Mongoose

HTTP API: 

        CLI(Command Line Interface)
        GUI(Graphic User Interface)
        API(Application Programming Interface)
          
REST API: 

        GET    /products       -> Get all products []
        GET    /products/:id   -> Get onr products {}
        POST   /products       -> Create product
        PUT    /products/:id   -> Replace/Create product
        PATCH  /products/:id   -> Update product
        DELETE /products/:id   -> Delete a product

        Authentication Header (JWT) not Cookie     

Error handling in ExpressJS: 
        
        in 3-errors-handling and 4-errors  

Deploy to heroku: 

        Previous deploy to heroku:
                        - Fix port var use env
                        - Check package.json
                        - Not save uploads file  on heroku (Cloudinary)
                        - Replace code lowDB, use MongoDB
                        - Heroku just save source code

NEED TO READ: 

        expressJs
        MongoDB tutorial
        MongooseJs
              
             
            
    
