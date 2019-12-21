import { Post, Controller, UseInterceptors, UploadedFile } from '@nestjs/common'
// import { FileInterceptor } from '@nestjs/platform-express'
import { UploadersService } from './uploaders.service'
import { IMulterFile } from './interfaces/multer.interface'

@Controller('uploads')
export class UploadersResolver {
  constructor(private readonly uploadersService: UploadersService) {
    this.uploadersService = uploadersService
  }

  @Post()
  // @UseInterceptors(FileInterceptor('file'))
  @UseInterceptors()
  public uploadFile(@UploadedFile() file: IMulterFile) {
    return this.uploadersService.upload(file)
  }
}
