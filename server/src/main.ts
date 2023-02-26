import * as process from "process";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


const start = async () => {
  try {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    await app.listen(PORT, () => console.log(`bro, all right, server started on port ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}
start()