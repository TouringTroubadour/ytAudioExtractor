# ytAudioExtractor

Do you ever need to extract audio from Youtube Videos, but hate using those pesky ad-ridden, slow and questionable websites?

Well look no further than this super simple tool!

Using ytdl-core and ffmpeg, this tool only requires two inputs, A youtube URL, and an output name for the new audio file.

---

### Usage

```bash
ytAudioExtractor.exe -u <path-to-image> -o <path-to-output>
```

### Options

- **-u, --source [URL]**: _Required._  Youtube URL to extract audio from.

- **-o, --output [string]**: _Required._ Path to the output audio.

### Examples

1. Example A:

   ```bash
   ./ytAudioExtractor.exe -u <Youtube URL> -o song.mp3
   ```

2. Example B:

   ```bash
   ./ytAudioExtractor.exe -u <Youtube URL> -o ./path/to/song.mp3
   ```

---

## Installation and Setup

### Retrieving the Executable

1. Navigate to the `bin` directory of the repository or distribution package.
2. Look for the `ytAudioExtractor` executable (`ytAudioExtractor.exe` for Windows).
3. Download the `ytAudioExtractor` executable somewhere, and access that location using a terminal.
4. Now follow the examples shown above.

---

## Libraries Used

`ytAudioExtractor` relies on a set of powerful third-party libraries to efficiently achieve its functionality.

### Yargs

[Yargs](https://yargs.js.org/) is a popular command-line argument parser for Node.js that simplifies the process of building interactive command-line tools. It offers a user-friendly way to parse command-line arguments and generate an elegant and intuitive user interface for the command-line application.

**Usage in ytAudioExtractor:**
In the context of `ytAudioExtractor`, Yargs plays a crucial role in creating a user-friendly command-line interface (CLI) for the application. It manages the parsing of user inputs, ensuring that the provided arguments are properly validated and structured. Additionally, Yargs provides automatic generation of help messages, making it easier for users to understand the available command-line options and usage patterns.

**Key Features:**

- **Dynamic Help Messages:** Yargs dynamically generates help messages based on the defined command-line options, making it easier for users to understand how to use the application.
- **Command Grouping and Aliases:** Yargs supports grouping related commands and defining aliases for options, allowing for a more organized and intuitive CLI.
- **Default Values:** Yargs enables you to define default values for command-line options, ensuring a seamless user experience even when certain arguments are not provided.
- **Argument Validation and Error Handling:** Yargs helps in validating provided arguments and handling errors gracefully, improving the reliability of the application.

### ytdl-core

[ytdl-core](https://www.npmjs.com/package/ytdl-core) is a Node.js library that simplifies downloading and processing YouTube videos and audio streams directly from YouTube URLs.

**Usage in ytAudioExtractor:**
`ytdl-core` is used in `ytAudioExtractor` to fetch the audio stream of a YouTube video based on the provided URL. It allows the application to select the desired quality and filter, ensuring that only the audio component is extracted for further processing.

**Key Features:**

- **YouTube Video Processing:** `ytdl-core` offers the ability to extract video and audio streams from YouTube videos with ease.
- **Quality Selection:** The library allows specifying the desired quality of the video or audio to be downloaded.
- **Filtering Options:** It supports filtering options to extract specific components, such as audio-only streams.

---

## The Boring Stuff (License)

MIT License

Copyright (c) [2023]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
