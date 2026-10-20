//enum in TS means giving names to fixed or constant set of values

/* Types of enum
Numeric enum
string enum
heterogeneous 
*/

//Numeric enum(default it's numeric)

enum browserStatus{

    open,
    closed,
    incognito = 4,
    crash
}
console.log(browserStatus.crash);

console.log(browserStatus);

//string enum

enum Testresults{
    pass ="Test passed",
    fail = "Test failed",
    skip = "Test skipped"
}

console.log(Testresults);

//heterogeneous enum(combination of both string and numeric)


enum Testresult {
    pass1,
    fail1 ="Test failed",
    skip1 = 'TC',
    closed = 67,
    step
}

console.log(Testresult);
console.log(Testresult.step);

