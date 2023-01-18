import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from './config/database/database.module';
import { CachedModule } from './config/cache/cache.module';

@Module({
  imports: [
    UsersModule,
    FilesModule,
    DatabaseModule,
    CachedModule,
    MulterModule.register({
      dest: '../public/files',
    }),
  ],
})
export class AppModule {}
