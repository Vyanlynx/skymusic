export const wordSlicer = (word: string, length = 12): string => {
    if (word.length > length && word) {
        return `${word.slice(0, length)}...`
    } else {
        return word;
    }
};

export const apiCall = async (payload: string) => {
    try {
        let res = await fetch(payload)
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createKeyFromString = (data: string) => {
    return data.replace(/\s/g, "").toLowerCase()
}