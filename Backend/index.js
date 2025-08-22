import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
dotenv.config();

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  const now = new Date();
  const options = { timeZone: "Asia/Yangon", hour: "numeric", hour12: false };
  const hour = new Intl.DateTimeFormat("en-GB", options).format(now);

  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning!";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon!";
  } else if (hour >= 17 && hour < 22) {
    greeting = "Good evening!";
  } else {
    greeting = "Keep pushing!";
  }

  console.log(greeting);

  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
