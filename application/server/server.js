//requirements and dependencies
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongo");
const postRoute = require("./routes/posts.js");
const loginRoute = require("./routes/login.js");
const signupRoute = require("./routes/signup.js");
const profileRoute = require("./routes/profile.js");
const groupRoute = require("./routes/group.js")

//server backend init
const app = express();
app.use(cors());
app.use(postRoute);
app.use(express.json());

app.use((req,res,next)=> {
  console.log(req.path, req.method);
  next();
});

//cookies and sessions
app.use(cookieParser());
const day = 1000 * 60 * 60 * 24 //1 day in milliseconds 
app.use(session({
  secret: 'fdahvx1qp6m66k3u',
  cookie: {
    maxAge: day 
  },
  store: MongoDBStore.create({
    mongoUrl: process.env.mongo_url,
    collection: 'my_sessions',
    autoRemove: 'native'
  }),
  resave: true,
  saveUninitialized: false
}));

//routes
app.use("/api/posts",postRoute);
app.use("/auth",loginRoute);
app.use("/signup",signupRoute);
app.use("/api/profile",profileRoute);
app.use("/api/groups",groupRoute)

mongoose.connect(process.env.mongo_url)
  .then(() =>{
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server connected to mongo and is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

