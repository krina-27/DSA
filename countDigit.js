const countDigits = (num) => {

    if(num === 0){
        return 1;
    }

    // Math.round();
    // Math.ceil()

    num = Math.abs(num);

    let count = 0;

    while(num> 0) {
        num = Math.floor(num/10);
        count++;
    }

    return count;
}


console.log(countDigits(-289))