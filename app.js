require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { AppDataSource } = require("./src/models/data-source");
const { routes } = require("./src/routes");
const { globalErrorHandler } = require('./src/utils/error');

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(routes);
app.use(globalErrorHandler);

// 데이터베이스 초기화
async function initializeApp() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");

    // 서버 시작
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Listening to request on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error during Data Source initialization", error);
  }
}

// 애플리케이션 초기화 및 서버 시작
initializeApp();
