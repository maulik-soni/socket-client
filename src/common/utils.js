
export function parseData(parse) {
  const data = parse.split(',');
  data.pop();
  const [date, open, high, low, close, volume] = data;
  this.date = new Date(+date);
  this.open = +open;
  this.high = +high;
  this.low = +low;
  this.close = +close;
  this.volume = +volume;
}

export function getData(interval=1) {
  const promiseMSFT = fetch(`http://kaboom.rksv.net/api/historical?interval=${interval}`)
    .then(response => response.text())
    .then(data => { return JSON.parse(data).map(d=> new parseData(d)); })
  return promiseMSFT;
}
