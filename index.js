// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}

  ]
function superbowlWin(record){
    for (const game of record) {
        if (game.result==="W"){
            return game.year
        }
    
    


}}
record.find(superbowlWin)
