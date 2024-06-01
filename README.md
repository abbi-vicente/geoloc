# geolocation

### Description
This uses Express.js to simulate a Database for geolocation
And React Native/Expo for frontend

### Pre-requisites
 - Code editor (i.e. VSCode)
 - POSTman or Thunder Client (to run test queries)
 - NodeJS
 - Git & GitHub (to get this repository)


### How to Run

 - Clone this repository

 - Install all the dependencies (**npm i**)

### In the server directory
 - Create a .env file which has the following contents:
 1. MONGO_URI - mongoDB atlas connection URL
 2. JWT_SECRET - a secret phrase that JWT will use to encrypt the tokens it will give to users.
 3. PORT - a virtual point where network connections start and end (example: 4000)
 - Run the server (**cd server** > **nodemon server.js**)
 
## Routes to Test
### Authorization

> Pass an object with your email and password in the **body** > **raw** (JSON) of the request.
> i.e. {"email": "geo@mail.com", "password": "geo"}

 - http://localhost:4000/api/users/signup (POST)
 - http://localhost:4000/api/users/login (POST)

### In the client directory
- Run the server (**cd client** > **npm start**)
- You may install Expo Go on your mobile phone, scan the QR code, and run it from there.
- If you have Android studio on your computer, you may use that.
- Otherwise, press **w** on your keyboard to run the app in your browser.

NOTE: This is a work in progress. You may add in some more features and we can work together. **wink*
