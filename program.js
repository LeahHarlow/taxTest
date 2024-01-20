//import Axios from 'axios';

//console.log(Axios)

let base_url =
  "http://www.irs.gov/uac/Authorized-IRS-e-file-Providers-for-Individuals";

//const resp = Axios.get(base_url)

async function scrapeIRS() {
    const response = await fetch(base_url)
    console.log(response)
}

scrapeIRS();
