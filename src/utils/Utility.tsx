export const formatName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export const delay = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

// Helper function to compare arrays
export const arraysEqual = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}