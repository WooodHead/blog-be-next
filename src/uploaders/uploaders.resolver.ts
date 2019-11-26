import { Post, Controller, UseInterceptors, UploadedFile } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { UploadersService } from './uploaders.service'

@Controller('uploads')
export class UploadersResolver {
  constructor(private readonly uploadersService: UploadersService) {
    this.uploadersService = uploadersService
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public uploadFile(@UploadedFile() file) {
    return this.uploadersService.upload(file)
  }
}