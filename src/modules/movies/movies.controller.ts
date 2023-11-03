import { Router } from "express";
import { SearchRequest } from "./movies.interfaces";
import axios from "axios";


const router = Router()

const BASE_SEARCH_URL = 'http://rutor.info/search'
router.get('/search', async({query: {searchTerm}}: SearchRequest, res) => {
    try {
        const searchResult = await axios.get(`${BASE_SEARCH_URL}/${searchTerm}`) 
        res.status(200).send(searchResult.data)
    } catch (err) {
        res.status(400).send(err)
    }
})

export default router