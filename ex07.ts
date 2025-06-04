let players: {
    name: string
}

function duckDuckGoose(players: {name: string}[], goose: number): string {
    let i = goose - 1;
    while(i >= players.length){
      i = i - players.length;
    }
    return players[i].name
  }
let que = [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
    {name: 'd'},
]
  duckDuckGoose(que, 1)