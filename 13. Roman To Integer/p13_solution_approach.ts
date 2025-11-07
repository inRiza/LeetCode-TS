function romanToInt(s: string): number {
    const romanValueMap: { [key: string] : number } = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let total: number = 0;
    let prevValue: number = 0;

    // iterate from the end because the "pola" is easier to detect
    /*
        the "pola" is if the current value is less than the previous value from right to left
        then the total value is a substraction.
        For ex: IV (because I < V) => 5 - 1 = 4 [this is works for every condition given]
        else it is an addition like usual. 
    */
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        const currValue = romanValueMap[char];

        if (currValue < prevValue) {
            total -= currValue;
        } else {
            total += currValue;
        }

        prevValue = currValue;
    }
    
    return total;
};