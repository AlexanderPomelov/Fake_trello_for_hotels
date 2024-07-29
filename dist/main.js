"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const AppModule_1 = require("./AppModule");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const PORT = process.env.PORT || 8080;
    const app = await core_1.NestFactory.create(AppModule_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Trello")
        .setDescription("Backend fake trello for hotels.ru")
        .setVersion("1.0.0.")
        .addTag("Hotels.ru")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/api/docs", app, document);
    await app.listen(PORT, () => console.log(`Server started at ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map