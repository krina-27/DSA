const isPalindrome = (num) => {

    if(num < 0){
        return false;
    }

    let rev = 0;
    const tempNum = num;

    while(num> 0){
        let rem = num%10;
        rev = (rev*10) + rem
        num = Math.floor(num/10);
    }
    return rev === tempNum;
}

console.log(isPalindrome(14444441));