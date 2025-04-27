import { Readable } from 'node:stream';
import { ReadableStream } from 'stream/web';

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) this.push(null);
      else this.push(Buffer.from(String(i)));
    }, 1000);
  }
}

// Converte NodeJS Readable → WHATWG ReadableStream
const webStream = Readable.toWeb(new OneToHundredStream());

fetch('http://localhost:3334', {
  method: 'POST',
  body: webStream,
  duplex: 'half',
});
