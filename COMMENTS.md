Comments/advices about the project

* App.js 

     >app.use(express.static('views')); // folder views contain non static files
    
     >Seperate routes cart / products
     
     > Redirect to product list page (/) path
 
* Product.js  , Cart.js
 
    > Centralise the DB calls to avoid code deplication
        
     - error handling 
     - File created lib/db_connection.js
  
* Templating / css / js
  
    > Twig : Created a layout and use of extending feature
  
    > css / js 
     
     - correct placement : scripts in the footer 
     - Use of css lib locally instead of cdn files
        
> TODO 
      
 - Tranduction
 - Error handler for product action's
 - Cart recap page / localstorage
 - Payment ...
      
 
  
 