'use strict';

const getWords = () => Array.from(document.querySelectorAll('div.result.hidden > div.words > p')).map(n => n.textContent);

function findBest() {
  let rstlne = new Set('RSTLNE');
  let best;
  let bestcount = 0;
  getWords().forEach(word => {
    let charcount = Array.from(new Set(word)).filter(char => rstlne.has(char)).length;
    if (charcount > bestcount) {
      console.log(`new best: ${word} ${charcount} ${bestcount}`)
      best = word;
      bestcount = charcount;
    }
  });
  return best;
}


let first = document.createElement('button');
first.textContent = 'First word pls';
first.style = 'margin:5px auto; padding:5px;';
first.onclick = () => alert(`Yo yo yo.  First word is ${getWords()[0]}!`);


let best = document.createElement('button');
best.textContent = 'Best word pls?';
best.style = 'margin:5px auto; padding:5px;';
best.onclick = () => alert(`Aw snap, a pretty good word to try is ${findBest()}!`);

document.querySelector('#root > div:nth-child(3) > div').prepend(best);
document.querySelector('#root > div:nth-child(3) > div').prepend(first);

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute increments if released
//document.getElementById('first').addEventListener('click', findFirst);
//document.getElementById('best').addEventListener('click', findBest);
