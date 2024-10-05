import mongoose from "mongoose";

const dbUrl = process.env.NEXT_PUBLIC_DATABASE_URL || "";

export const connectToDB = async () => {
  try {
    await mongoose.connect(dbUrl).then((data: any) => {
      console.log("database connected successfully", data.connection.host);
    });
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectToDB, 5000);
  }
};
