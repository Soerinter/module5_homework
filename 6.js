 var arr = [4=5, 5, 5, 5];

 function equal (a) {
   for (var b = 0; b < a.length; b++)
     if (a[b] !== a[0]) return !1;
   return !0
 };

 console.log(equal(arr));
