/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy = x;
    x= Math.abs(x)
    let rev = 0;


    while(x > 0){
        let rem = x%10;
        rev = (rev*10) + rem;
        x= Math.floor(x/10);
    }

    const result = xCopy > 0? rev: -rev;

    if(-Math.pow(2, 31) < result && result < 2**3){
        return result
    }

    return 0;
};