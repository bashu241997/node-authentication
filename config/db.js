const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://admin:@cluster0.opxzb.mongodb.net/users?retryWrites=true&w=majority"
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
        useUnifiedTopology: true,
    useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log("error"+e);
    throw e;
  }
};
module.exports = InitiateMongoServer;
