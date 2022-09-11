import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb://localhost/Epicure");
};

export { connectDb }

