var sha256 = require("sha256")

console.log("Hash of 'Hello World':",sha256("Hello World"));

var str = "abcdefghijklmnopqrstuvwxyz";
var arr = str.split("")
for (var i=0; i<arr.length; i++){
  // console.log("forgot what i was gonna do here");
}

var a = arr[1]
var b = arr[2]
var c = arr[3]
var d = arr[4]
var e = arr[5]
var f = arr[6]
var g = arr[7]
var h = arr[8]
var i = arr[9]
var j = arr[10]
var k = arr[11]
var l = arr[12]
var m = arr[13]
var n = arr[14]
var o = arr[15]
var p = arr[16]
var q = arr[17]
var r = arr[18]
var s = arr[19]
var t = arr[20]
var u = arr[21]
var v = arr[22]
var w = arr[23]
var x = arr[24]
var y = arr[25]
var z = arr[26]


var ab = (sha256(a,b));
var cd = (sha256(c,d));
var ef = (sha256(e,f));
var gh = (sha256(g,h));
var ij = (sha256(i,j));
var kl = (sha256(k,l));
var mn = (sha256(m,n));
var op = (sha256(o,p));
var qr = (sha256(q,r));
var st = (sha256(s,t));
var uv = (sha256(u,v));
var wx = (sha256(w,x));
var yz = (sha256(y,z));

var abcd = (sha256(ab,cd));
var efgh = (sha256(ef,gh));
var ijkl = (sha256(ij,kl));
var mnop = (sha256(mn,op));
var qrst = (sha256(qr,st));
var uvwx = (sha256(uv,wx));
var yz00 = (sha256(yz,00));

// "00" is added as a padding since the binary tree of 26 proceeds as 26, 13 with an odd pair

var abcdefgh = (sha256(abcd,efgh))
var ijklmnop = (sha256(ijkl,mnop))
var qrstuvwx = (sha256(qrst,uvwx))
var yz001111 = (sha256(yz00,1111))

// Addition of "1111" is purely arbitary to act as sibling node; It can be anything.

var abcdefghijklmnop = (sha256(abcdefgh,ijklmnop))
var qrstuvwxyz001111 = (sha256(qrstuvwx,yz001111))

var abcdefghijklmnopqrstuvwxyz = (sha256(abcdefghijklmnop,qrstuvwxyz001111))

var root = sha256.x2(abcdefghijklmnopqrstuvwxyz)
console.log("Root Hash:",abcdefghijklmnopqrstuvwxyz);
console.log("Double root hash:",root);
