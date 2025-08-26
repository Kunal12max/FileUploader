const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'views/public')));

// Ensure upload folder exists
const uploadDir = path.join(__dirname, 'upload');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {   // ✅ fixed file param
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.redirect('/');
});

app.delete('/delete/:fileName', (req, res) => {   // ✅ fixed param
    const fileName = req.params.fileName;
    const filePath = path.join(uploadDir, fileName);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        res.send(`File ${fileName} has been deleted`);
    } else {
        res.status(404).send(`File ${fileName} not found`);
    }
});

app.get('/views', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading the upload directory');
        } else {
            res.json({ files });
        }
    });
});

// Start server
app.listen(3100, () => {
    console.log('Server is running on port 3100');
});
