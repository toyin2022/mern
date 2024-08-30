import mongoose from "mongoose";

export const connection = async () => {
  mongoose
    .connect(
      "mongodb+srv://ayscript:ayscript@mernstack.8g02m.mongodb.net/?retryWrites=true&w=majority&appName=mernStack&dbName=aBlog"
    )
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => console.log({ error: err }));
};

// const uri =
//   "mongodb+srv://ayscript:ayscript@mernstack.8g02m.mongodb.net/?retryWrites=true&w=majority&appName=mernStack";

// export async function run() {
//   try {
//     await mongoose.connect(uri);
//   } finally {
//     await mongoose.disconnect();
//   }
// }
