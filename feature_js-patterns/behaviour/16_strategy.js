// RootStrategy
class Route {
  buildRoute() {
    return this.road
  }
}

// Strategy_1
class Road extends Route {
  constructor() {
    super()
    this.road = 'Car'
  }
}

// Strategy_2
class Walking extends Route {
  constructor() {
    super()
    this.road = 'Sidewalk'
  }
}
// Strategy_3
class PublicTransport extends Route {
  constructor() {
    super()
    this.road = 'Public Route'
  }
}

// Контекст
class Navigator {
  drawWay(transport) {
    return `I draw the way by ${transport.buildRoute()} roads`
  }
}

const navigator = new Navigator()

console.log(navigator.drawWay(new Road())) // 'I draw the way by Car roads'
console.log(navigator.drawWay(new Walking())) // 'I draw the way by Sidewalk roads'
console.log(navigator.drawWay(new PublicTransport())) // 'I draw the way by Public Route roads'
