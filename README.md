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
   ./ytAudioExtractor.exe -u <Youtube URL> -d song.mp3
   ```

2. Example B:

   ```bash
   ./ytAudioExtractor.exe -u <Youtube URL> -o ./path/to/song.mp3
   ```

## Installation and Setup

### Retrieving the Executable

1. Navigate to the `bin` directory of the repository or distribution package.
2. Look for the `ytAudioExtractor` executable (`ytAudioExtractor.exe` for Windows).

## Libraries Used

`ytAudioExtractor` leverages powerful third-party libraries to achieve its functionality with efficiency and ease.

### Yargs

**[Yargs](https://yargs.js.org/)** is a command-line argument parser that makes it easy to build interactive command-line tools. It parses arguments and generates an elegant user interface.

**Usage in ytAudioExtractor:**
Yargs is responsible for the user-friendly command-line interface (CLI) of ytAudioExtractor. It parses user inputs, validates them, and provides interactive help messages.

**Key Features:**

- Dynamic generation of help messages.
- Supports command grouping, aliases, and default values.
- Handles argument validation and error messages.

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
