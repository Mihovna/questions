var even =[];
var odd =[];
var filter = function (number) {
    if (number%2 ===0) {
        even.push(number);
    } else {
        odd.push(number);
    }
    console.log(even);
    console.log(odd);
};
filter(2);

