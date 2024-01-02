export const updatePlayerTokens = (currBank: number) => {
    const defaultPattern: number[] = [5, 10, 20, 50, 100, 500];
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