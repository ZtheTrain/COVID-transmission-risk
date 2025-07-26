const fs = require('fs');
const Papa = require('papaparse');

// Read the CSV file
fs.readFile('risk_data.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the CSV data
  Papa.parse(data, {
    header: true, // Use the first row as header keys
    dynamicTyping: true, // Automatically convert types
    complete: function(results) {
      // Write the parsed data into a JSON file
      fs.writeFile('risk_data.json', JSON.stringify(results.data, null, 2), (err) => {
        if (err) throw err;
        console.log('CSV converted to JSON successfully!');
      });
    }
  });
});
