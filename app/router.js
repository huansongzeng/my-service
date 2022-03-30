const { Router } = require('express');
const router = Router();
const axios = require('axios')

router.get('/', async (req,res) => {
    const response = await axios.get('http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json');
    const { status, data } = response;
    switch(status) {
        case 200:
            let weatherData = data.observations.data
            let returnData = weatherData
                                .filter(record => record.apparent_t > 20)
                                .sort((a,b) => a.apparent_t - b.apparent_t)
                                .map(record => { 
                                    return {
                                        name: record.name,
                                        apparent_t: record.apparent_t,
                                        lat: record.lat,
                                        long: record.lon,
                                    }
                                })
            res.json(returnData)
            break
        default:
            res.status(503).json({"error": "Error Connecting to BOM."})
    }
})

module.exports = router