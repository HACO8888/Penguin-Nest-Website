import mongoose from "mongoose";

export default function mongo() {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!)
    .then(() => console.log("Connected to database movieDB"))
    .catch((err) => console.log(err));
  mongoose.Promise = global.Promise;

  return mongoose;
};