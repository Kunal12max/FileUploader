# FileUploader
A simple file uploader web application built with Node.js, Express, Multer, and EJS.  
It allows users to upload and delete files, with uploaded files stored in the `upload/` directory.
---
# Features
- Upload files through a web form
- Delete uploaded files by filename
- Stores files in a dedicated `upload/` folder
- Uses EJS for templating and basic CSS for styling
- Clean and minimal project structure
---
##  Project Structure
│── app.js # Main server file
│── views/ # EJS templates and public CSS
│ ├── index.ejs
│ └── public/
│ └── index.css
│── upload/ # Stores uploaded files (gitignored)
│── package.json
│── README.md

##  Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Kunal12max/FileUploader.git
   cd FileUploader
2. Dependencies to install
      npm install express ejs multer
3 Start The server
    node app.js
4 For opening app in your browser
   http://localhost:3100

