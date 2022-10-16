import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./database/config.js";
connectDB();
app.listen(PORT, () => {
  console.log("app on port", PORT);
});
