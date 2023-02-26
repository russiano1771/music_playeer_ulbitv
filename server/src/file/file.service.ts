import { HttpException, HttpStatus } from "@nestjs/common";
import * as path from "path";
import * as uuid from 'uuid'
import * as fs from "fs";

export enum fileType{
  AUDIO = 'audio',
  IMAGE = 'image'
}
export class FileService{
  createFile(type: fileType, file){
    try {
      const fileExtencion = file.originalname.split('.').pop()
      const fileName = uuid.v4() + '.' + fileExtencion
      const filePath = path.resolve(__dirname, '..', "static", type)
      if (!fs.existsSync(filePath)){
        fs.mkdirSync(filePath, {recursive: true})
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
      return type + '/' + fileName
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  removeFile(){

  }
}