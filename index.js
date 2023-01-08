import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import path from 'path';
import { fileURLToPath } from 'url';
import dbReplika from "./config/DatabaseReplika.js";

dotenv.config();
const app = express();


try {
    await db.authenticate();
    await dbReplika.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads",express.static('upload'))

app.use(fileUpload());

app.get("/image.png", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/google-cloud.png"));
});

app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'));