import io from 'socket.io-client';
import { parseData } from './utils';
const ENDPOINT = "http://kaboom.rksv.net/watch";

class ClientSocket{
  constructor(){
    this.socket = io(ENDPOINT);
    this.socket.on('connect', () => {
      this.socket.emit("sub", {state: !0});
    });
  }

  listenToSocket(callBack){
    const chartData = [];
    this.socket.on("data", (response, acknowledge) => {
      chartData.push(new parseData(response));
      callBack(chartData);
      acknowledge(1);
    });
  }

  unsubscribe(){
    this.socket.emit("unsub", {state: !!0});
  }
}

export default ClientSocket;