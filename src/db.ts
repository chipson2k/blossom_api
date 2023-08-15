import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(
      "mongodb+srv://dungvang033:JbfFmktNtmuHAXK1@tutorial.bxfz8fv.mongodb.net/?retryWrites=true&w=majority"
    );
    if (connection) {
      console.log("Connection established");
    }
  } catch (error) {
    console.log("error in connectToDatabase", error);
    throw error;
  }
};

export default connectToDatabase;
