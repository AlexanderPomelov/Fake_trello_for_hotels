import { NestFactory } from "@nestjs/core";
import { AppModule } from "./AppModule";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Trello")
    .setDescription("Backend fake trello for hotels.ru")
    .setVersion("1.0.0.")
    .addTag("Hotels.ru")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started at ${PORT}`));
}

start();
