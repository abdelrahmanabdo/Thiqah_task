import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  CACHE_MANAGER,
  Inject,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ALLOWED_FILE_TYPES,
  FILE_PATH_EXPIRATION_TIME,
} from './constants/files.constant';
import { Cache } from 'cache-manager';

@Controller('files')
export class FilesController {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private readonly filesService: FilesService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: ALLOWED_FILE_TYPES })],
      }),
    )
    file: Express.Multer.File,
  ) {
    const newFile = this.filesService.saveFile(file);

    if (!newFile) {
      throw new Error('Error while saving file');
    }

    this.cacheManager.set(file.filename, newFile);

    return {
      status: 'success',
      filePath: newFile,
      expiration: FILE_PATH_EXPIRATION_TIME,
    };
  }
}
