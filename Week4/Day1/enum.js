"use strict";
//enum in TS means giving names to fixed or constant set of values
/* Types of enum
Numeric enum
string enum
heterogeneous
*/
//Numeric enum(default it's numeric)
var browserStatus;
(function (browserStatus) {
    browserStatus[browserStatus["open"] = 0] = "open";
    browserStatus[browserStatus["closed"] = 1] = "closed";
    browserStatus[browserStatus["incognito"] = 4] = "incognito";
    browserStatus[browserStatus["crash"] = 5] = "crash";
})(browserStatus || (browserStatus = {}));
console.log(browserStatus.crash);
console.log(browserStatus);
//string enum
var Testresults;
(function (Testresults) {
    Testresults["pass"] = "Test passed";
    Testresults["fail"] = "Test failed";
    Testresults["skip"] = "Test skipped";
})(Testresults || (Testresults = {}));
console.log(Testresults);
//heterogeneous enum(combination of both string and numeric)
var Testresult;
(function (Testresult) {
    Testresult[Testresult["pass1"] = 0] = "pass1";
    Testresult["fail1"] = "Test failed";
    Testresult["skip1"] = "TC";
    Testresult[Testresult["closed"] = 0.7] = "closed";
    Testresult[Testresult["step"] = 1.7] = "step";
})(Testresult || (Testresult = {}));
console.log(Testresult);
console.log(Testresult.step);
