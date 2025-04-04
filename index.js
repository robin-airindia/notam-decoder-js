const notamDecoder = require('./notam-decoder');

// Read the NOTAM message from the command-line arguments
const rawNotamMessage = process.argv.slice(2).join(' ');

if (!rawNotamMessage) {
    console.error('Error: Please provide a raw NOTAM message as an argument.');
    process.exit(1); // Exit with an error code
}

const decodedNotam = notamDecoder.decode(rawNotamMessage);

// Output the decoded NOTAM as a JSON string
console.log(JSON.stringify(decodedNotam, null, 2));
