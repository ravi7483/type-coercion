var cl = console.log;

cl("app.js file");
//cl(y);
// var y;
// cl(y);
var x = 30;

cl(x,typeof x);

var time = "years";
cl(time,typeof time);

var result = x + time;
cl(result,typeof result);

var candrive = true;

var result = x + candrive;
cl(result,typeof result);

var result = 10 + 20 + 30 + "50" + 40 + 40; // 60504040
cl(result,typeof result);
var result = 10 + 20 + 30 + true + "50" + 40 + 40 + 40; // 6150404040
cl(result,typeof result);

var z = null;

result = x + null;
cl(result,typeof result);

//null >> any value is zero

var y;
cl(y);
result = time +" "+ y;
cl(result,typeof result);

var p = 30;
cl(p,typeof p);

var Canflay = true;
cl(Canflay,typeof Canflay);

var result = p + " " + Canflay;
cl(result, typeof result);

var subject = "chemistry";

result = p + subject;
cl(result,typeof result);

var y;
 result = subject + y;
 cl(result, typeof result);
 
 var q = null;
 result = subject + q;
 cl(result, typeof result);
 
 
 result = 30 + 30 + true + "50" + 34 + 45; // 61503445
cl(result, typeof result);

result = x + subject + q +  50; // 30chemistrynull50
cl(result,typeof result);