import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentBuilder = new DocumentBuilder();
  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
