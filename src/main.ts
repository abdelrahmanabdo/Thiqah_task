import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Swagger API
   */
  const config = new DocumentBuilder()
    .setTitle('THIQAH Task')
    .setDescription('The THIQAH API description')
    .setVersion('1.0')
    .addTag('THIQAH')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
