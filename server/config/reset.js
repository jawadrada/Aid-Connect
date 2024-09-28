import { pool } from './database.js';
import './dotenv.js'
import aidsData from '../data/aids.js';

async function createAidsTable() {
    const createTableQuery = `
    DROP TABLE IF EXISTS aids;

    CREATE TABLE IF NOT EXISTS aids (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT NOT NULL,
        donationLink VARCHAR(500) NOT NULL,
        volunteerLink VARCHAR(500) NOT NULL,
        description TEXT NOT NULL,
        submittedBy VARCHAR(500) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
    `

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 aids table created successfully');
    } catch (err) {
        console.error('⚠️ error creating aids table', err);
    }
}

createAidsTable()

const seedAidsTable = async () => {
    await createAidsTable();

    for (const aid of aidsData) {
        const insertQuery = `
        INSERT INTO aids (name, image, donationLink, volunteerLink, description, submittedBy, submittedOn)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

        const values = [
            aid.name,
            aid.image,
            aid.donationLink,
            aid.volunteerLink,
            aid.description,
            aid.submittedBy,
            aid.submittedOn
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ ${aid.name} added successfully`);
        } catch (err) {
            console.error('⚠️ error inserting aid', err);
        }
    }
};

seedAidsTable();