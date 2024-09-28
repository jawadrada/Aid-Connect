import express from 'express';
import './config/dotenv.js';
import aidsRouter from './routes/aids.js'
const app = express();

// Middleware to serve static files from the public directory
// This allows clients to access files such as (images, stylesheets, scripts, etc.)
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

// Route handler for the root URL ('/')
// When a client sends a GET request to the root URL, this function is executed
// It sets the HTTP status code to 200 (indicating success) and sends an HTML response
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Aid-Connect API</h1>')
});

app.use('/aids', aidsRouter)

const PORT = process.env.PORT || 5000;
    
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})