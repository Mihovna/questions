var compare = function (a,b) {
    if (a<b) {
        return 'a<b'
    };
    if (a>b) {
        return 'a>b'
    };
    if (a==b) {
        return 'a=b'
    };
};
console.log(compare(2,2))
