// Only need the next line + npm install if your NodeJS version is older than v18 I think, and v12 is the newest you get standard on a linux dist so it's here just in case.
import fetch from "node-fetch";

// This provides us with all of the HTML scraped off the page.
let baseUrl =
  "http://www.irs.gov/uac/Authorized-IRS-e-file-Providers-for-Individuals";

async function scrapeIRS() {
  const response = await fetch(baseUrl);
  const data = await response.text();
  console.log(data);
}

// Commented the call out just to keep a clean terminal.
//scrapeIRS();

// Now to search by zipcode and get the entire HTML for that page.
async function searchByZip(zip) {
  const zipUrl = `https://www.irs.gov/efile-index-taxpayer-search?zip=${zip}&state=All`;
  const response = await fetch(zipUrl);
  // Extracts the HTML.
  const data = await response.text();
  console.log(data);
}

// Change for desired zipcode, if zip is left blank it searches all IRS e-file Providers.
const zipcode = 90265;

// Again commented out for cleanliness.
//searchByZip(zipcode);

// Now complete with parameters for zipcode, name and phone number to search.
async function searchByParams(zip, name, phone) {
  const zipUrl = `https://www.irs.gov/efile-index-taxpayer-search?zip=${zip}&state=All`;
  const response = await fetch(zipUrl);
  const data = await response.text();
  // Split text of HTML into an array to give us Array methods for filtration based on the input params.
  // Splitting at <tr> gives the HTML for each individual Provider like a business card.
  const dataArray = data.split("<tr>")
  // Now run a filter over the array of Providors to search for name or number
  let filtered = dataArray.filter((index) => index.includes(name || phone))
  console.log(filtered)
  return filtered
}


// Basic tests without intigrating a testing framework, resolution of promises from async functions may have them in a different order.
console.log("Expected HTML for BONNIE JO ROSS and got",(searchByParams(90265, "BONNIE JO ROSS"))) // Should Pass
console.log("Expected HTML for ACCOUNTING RIVERS and got",(searchByParams(93010, "ACCOUNTING RIVERS", "(805)335-2460"))) // Should Pass
console.log("Expected HTML for ANGELICA CHAVEZ and got",(searchByParams(93030, "ANGELICA CHAVEZ","(805)485-6547"))) // Should Pass
console.log("Expected HTML for BARROWS & COMPANY and got",(searchByParams(93010, "BARROWS"))) // Should Fail


/* If I were releasing this a real app I would add lines conforming the search inputs and filtrated names to all be lowercase or uppercase 
to keep improper capitalization from turning up results. I would also add similar coercion to the input for phone numbers, creating a strict 
input on the front end, converting the phone input into a string etc.
I would also add error handling to my Async functions to aid in UI*/

//I hope you like my assessment! Thank you for your concideration I look forward to the chance to get to join the team at fileyourtaxes.com.
