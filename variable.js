/*
Finish the uefaEuro2016() function so it return string just like in the examples below:
*/
function uefaEuro2016(teams, scores){
  const team1=teams[0];
  const team2=teams[1];
   if(scores[0]>scores[1]){
   return `At match ` + team1 + ` - ` + team2 + `, ` + team1 + ` won!`
   } else if (scores[0] < scores[1]) {
      return 'At match ' + team1 + ' - ' + team2+ ', ' + team2 + ' won!';
    } else if (scores[0] === scores[1]) {
      return 'At match ' + team1 + ' - ' + team2 + ', teams played draw.';
    }
     
   }
