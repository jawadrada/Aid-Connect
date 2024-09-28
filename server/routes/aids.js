import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import AidsController from '../controllers/aids.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', AidsController.getAids);

router.get('/:aidId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/aid.html'));
});

export default router;
