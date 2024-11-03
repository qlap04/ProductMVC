const express = require('express') // import express library
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8082; // Thiết lập giá trị mặc định cho port
const path = require('path')
const configViewEngine = require('./config/viewEngine.js')
const webRoutes = require('./routes/web')

configViewEngine(app);

app.use('/', webRoutes);

// Khởi động server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
