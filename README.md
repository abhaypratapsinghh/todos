Building a simple todo application with feaatures like:
 Anyone can create todo
 Any one can see their own todo lists
 Any one can mark their toos as done

 Inittialize a node project // put a package.json
 backend folder
    index contains routes:
        signup -> sign up user with username and password with jwt and a token is generated and provided to user
        get todo -> provide all the listed tasks authenticated using jwt token
        post todo-> create a new uncompletd task with authenticated user using token
        put completed/:tast id->update task after successful authentication using jwt token

    db contains 
        connection with database mongodb and schema to store tasks 

    types contains
        logic for various route specific data in headers or body              