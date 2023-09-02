const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
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

// Set the FFmpeg binary path
ffmpeg.setFfmpegPath(ffmpegPath);

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

    // Extract the directory path from the output filename
    const outputDir = path.dirname(outputFilename);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Use fluent-ffmpeg to convert the audio stream to an MP3 file
    ffmpeg(stream)
      .setFfmpegPath(ffmpegPath) // Set the FFmpeg binary path
      .audioCodec('libmp3lame')
      .save(outputFilename)
      .on('end', () => {
        console.log('Conversion to MP3 complete!');
      })
      .on('error', (err) => {
        console.error('Error during conversion:', err);
      });
  } catch (error) {
    console.error('Error:', error);
  }
})();
