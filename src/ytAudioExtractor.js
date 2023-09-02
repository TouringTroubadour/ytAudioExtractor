const fs = require('fs');
const ytdl = require('ytdl-core');
const yargs = require('yargs');
const path = require('path');

// Set up command-line arguments using yargs
const argv = yargs
  .option('url', {
    alias: 'u',
    demandOption: true,
    describe: 'YouTube video URL',
    type: 'string',
  })
  .option('output', {
    alias: 'o',
    demandOption: true,
    describe: 'Output filename',
    type: 'string',
    default: 'output.mp3',
  })
  .argv;

// Extract provided arguments
const videoURL = argv.url;
const outputFilename = argv.output;

console.log('URL provided:', videoURL);

(async () => {
  try {
    if (!ytdl.validateURL(videoURL)) {
      console.error('Invalid YouTube URL');
      return;
    }

    // Get audio stream from the YouTube video
    const stream = ytdl(videoURL, {
      quality: 'highestaudio',
      filter: 'audioonly',
    });

    console.log('Beginning conversion...');

    // Create a writable stream for the output MP3 file
    const outputStream = fs.createWriteStream(outputFilename);

    // Pipe the audio stream to the output file stream
    stream.pipe(outputStream);

    // Handle the end of the audio stream
    outputStream.on('finish', () => {
      console.log('Conversion to MP3 complete!');
    });

  } catch (error) {
    console.error('Error:', error);
  }
})();
