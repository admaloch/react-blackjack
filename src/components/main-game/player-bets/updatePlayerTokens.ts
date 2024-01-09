export const updatePlayerTokens = (currBank: number) => {
    const defaultPattern: number[] = [1, 5, 25, 50, 100, 500];
    const currentSum = defaultPattern.reduce((sum, num) => sum + num, 0);
    let filteredArray = [];
    let remainingSum = currBank;
    if (currentSum > currBank) {
        for (const num of defaultPattern) {
            if (remainingSum - num >= 0) {
                filteredArray.push(num);
                remainingSum -= num;
            } else break;
        }
    } else {
        filteredArray = defaultPattern;
    }
    return filteredArray
}