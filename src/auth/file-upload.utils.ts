// src/auth/file-upload.utils.ts
import { extname } from "path";
import { HttpException, HttpStatus } from "@nestjs/common";

// Функція для редагування імені файлу при завантаженні
export const editFileName = (req, file, callback) => {
  const name = file.originalname.split(".")[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join("");
  callback(null, `${name}-${randomName}${fileExtName}`);
};

// Функція для фільтрації типів файлів при завантаженні
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        "Only image files are allowed!",
        HttpStatus.BAD_REQUEST
      ),
      false
    );
  }
  callback(null, true);
};
