const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('req.file', req.file);
  console.log('req.body', req.body);
  res.send('File uploaded successfully');
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
