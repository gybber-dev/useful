class Server {
  constructor(ip) {
    this.ip = ip
  }
}

function aws(server) {
  server.isAWS = true
  server.awsInfo = function() {
    return server.ip
  }
  return server
}

const s1 = aws(new Server('12.34.56.78'))
console.log(s1.isAWS)
console.log(s1.awsInfo())
