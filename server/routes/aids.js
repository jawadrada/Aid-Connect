import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import aidData from '../data/aids.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    console.log("Received request for /aids");
    res.status(200).json(aidData);
});

router.get('/:aidId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/aid.html'))
})

export default router