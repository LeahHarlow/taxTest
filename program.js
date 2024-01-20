
import fetch from "node-fetch";

let baseUrl =
  "http://www.irs.gov/uac/Authorized-IRS-e-file-Providers-for-Individuals";

async function scrapeIRS() {
  const response = await fetch(baseUrl);
  const data = await response.text();
  console.log(data);
}

// This provides us with all of the HTML scraped off the page
//scrapeIRS();

// Now to search by zipcode
async function searchByZip(zip) {
  const zipUrl = `https://www.irs.gov/efile-index-taxpayer-search?zip=${zip}&state=All`;
  const response = await fetch(zipUrl);
  const data = await response.text();
  console.log(data);
}

// Change for desired zipcode, had to use Malibu as the example of course
// If zip is left blank it searches all IRS e-file Providers
const zipcode = 90265;

//searchByZip(zipcode);

//Now add parameters for name and phone number to search
// need to filter text from response...

async function searchByParams(zip, name, phone) {
  const zipUrl = `https://www.irs.gov/efile-index-taxpayer-search?zip=${zip}&state=All`;
  const response = await fetch(zipUrl);
  const data = await response.text();
  //console.log(data);
  const dataArray = data.split("<tr>")
  //console.log(dataArray)
  let filtered = dataArray.filter((ind) => ind.includes(name || phone))
  console.log(filtered)
  return filtered
}

searchByParams(90265, "BONNIE JO ROSS","(310)453-1145")

//convert phone to string? strict format?
//idea to parse is to turn entire html into arrays split at < and >? then map or filter for <tr>, create a new array of the tr tags and then filter those for the name/number, maybe use ||?