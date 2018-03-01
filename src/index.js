// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var h, q, d, n, p;
var rest = 0;

if(currency>=50){
  h = Math.round(currency/50);
  rest = currency%50;

  if(rest>=25){
    q = Math.round(rest/25);
    rest=currency%25;
  }
  else q=0;

  if(rest>=10){
    d=Math.round(rest/10);
    rest=currency%10;
  }
  else d=0;

  if(rest>=5){
    n=Math.round(rest/5);
    rest=currency%5;
    p=rest;
  }
  else n=0;

}
else h=0;


var arr = [];
if(h!==0) arr.push('"H":'+h);
if(q!==0) arr.push('"Q":'+q);
if(d!==0) arr.push('"D":'+d);
if(n!==0) arr.push('"N":'+n);
if(p!==0) arr.push('"P":'+p);
    
    return arr;
}
