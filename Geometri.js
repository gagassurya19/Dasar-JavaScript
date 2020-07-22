// Deklarasi Data Deret Geometri
const a = 4;
const n = 10;
const r = 3;
var it;
var to = 0;

// Looping untuk mencari total deret Geometri
// Rumus Un
for(var i = 1; i <= n; i++){
    it = a * Math.pow(r,i-1);
    console.log(it);
    to += it;
}
console.log("Total : "+to);



