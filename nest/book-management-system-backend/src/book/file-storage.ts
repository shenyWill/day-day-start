import { diskStorage } from "multer";
import * as fs from 'fs';

const storage = diskStorage({
  destination: function (req, file, cb) {
    try {
        fs.mkdirSync('uploads');
    } catch (err) {
        console.log('mkdirSync err', err);
    }
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + '-' + file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName);
  },
});
export {
    storage,
}
