// src/bookDataService.js
import express from 'express'
import axios from 'axios'
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.get('/api/fetch-books', async (req, res) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=peace&key=${process.env.GOOLGE_BOOK_API_KEY}&startIndex=7&maxResults=25`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching books from Google Books API.' });
    }
});

app.get('/api/search', async (req, res) => {
    try {
        const { q, page } = req.query;
        const bookData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${process.env.GOOLGE_BOOK_API_KEY}&startIndex=${(parseInt(page)*5)}&maxResults=5`);
        res.json(bookData.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching books.' });
    }
});


app.listen(port, () => {
    console.log(`Book Data Service listening at http://localhost:${port}`);
});
