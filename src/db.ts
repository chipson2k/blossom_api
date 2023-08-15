import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/blossom-app"
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
