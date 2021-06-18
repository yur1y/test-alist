function myParseInt(str) {
    let res = str.charCodeAt(0) - 48;

    for (i=1; i< str.length; i++)
    {
        res *= 10;
        const charCode = str.charCodeAt(i)
        const value = charCode - 48;
        res += value;
    }
    return res;
};

// test
// console.log(myParseInt("123")+ 2);