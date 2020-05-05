# goal-setter

This is a goal setting application to write down one's goal and update its status (in-progress/Achieved).

#### This app is built using
- react and redux on the frontend.
- express and mongoose on the backend.
- sass and bootstrap for styling.
- jest for testing.
- webpack as a compilation and buildtool.
- MongoDb atlas as the cloud database.
- And some more helper packages.

#### Architecture
- Two seperate webpack configs one for backend and one for frontend.
- "./src" has two folders "frontend" and "backend".
- "./frontend" folder contains all the files and folders related to react and ui.
- "./backend" folder contains all the files and folders related to express and mongoose.
- a new "./build" folder gets created upon running the build command.That is the final output to be deployed.

#### Few important commands
```
startAll : To start the develompent mode for both backend and frontend.
build : To generate build folder.
start : To start the build application.
test : To execute tests.
```

## Previews
##### Notice the motivational quotes which gets generated randomly on every page.

### Homepage
![screenshot of homepage](https://res.cloudinary.com/dgrovf3st/image/upload/v1588674523/goal-setter/homepage_oklfxo.png)
### Signup
![screenshot of signup](https://res.cloudinary.com/dgrovf3st/image/upload/v1588674528/goal-setter/signup_v5wa3b.png)
### Signin
![screenshot of signin](https://res.cloudinary.com/dgrovf3st/image/upload/v1588674520/goal-setter/signin_gmaqms.png)
### Dashboard
![screenshot of dashboard](https://res.cloudinary.com/dgrovf3st/image/upload/v1588674521/goal-setter/dashboard_kopf75.png)


*This application may lack many functionalities as this is built only for practice and showcase*
