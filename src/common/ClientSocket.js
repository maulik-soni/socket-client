import io from 'socket.io-client';
const ENDPOINT = "http://kaboom.rksv.net/watch";

class ClientSocket{
  constructor(){
    this.socket = io(ENDPOINT);
    this.socket.on('connect', () => {
      this.socket.emit("sub", {state: !0});
    });
  }

  listenToSocket(callBack){
    this.socket.on("data", (response, acknowledge) => {
      callBack(response);
      acknowledge(1);
    });
  }

  unsubscribe(){
    this.socket.emit("unsub", {state: !!0});
  }

  onError(callBack){
    this.socket.on("error", callBack);
  }
}

export default ClientSocket;