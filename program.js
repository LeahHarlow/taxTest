//import Axios from 'axios';
import fetch from "node-fetch";

//console.log(Axios)

let baseUrl =
  "http://www.irs.gov/uac/Authorized-IRS-e-file-Providers-for-Individuals";

//const resp = Axios.get(base_url)

async function scrapeIRS() {
    const response = await fetch(base_url);
    const data = await response.text()
    console.log(data)
}

// This provides us with all of the HTML scraped off the page 
//scrapeIRS();

// Change for desired zipcode, had to use Malibu as the example of course
const zipcode = 90265;

async function searchByZip(zip) {
    const zipUrl = `https://www.irs.gov/efile-index-taxpayer-search?zip=${zip}&state=All`
    const response = await fetch(zipUrl);
    const data = await response.text()
    console.log(data)
}

searchByZip(zipcode);


//Now add parameters for name and phone number to search
