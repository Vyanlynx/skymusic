export const wordSlicer = (word: string, length = 12): string => {
    if (word?.length > length && word) {
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
export const filterSongsFromKeys = (data: any, favourites: any) => {
    let filterdData = data?.feed?.entry?.filter((item: any, i: number) => {
        return favourites.includes(createKeyFromString(item?.['im:name']?.label))
    })
    return filterdData;
}

export const searchbarSuggesstionsFilter = (data: any, value: any) => {
    let flag: any = []
    data?.feed?.entry?.forEach((item: any, i: number) => {
        if (createKeyFromString(item?.['im:name']?.label).includes(createKeyFromString(value.toLowerCase()))) {
            flag.push({ ...item, displayTag: item?.['im:name']?.label.slice(0,30)+"..."})
        } else if (createKeyFromString(item?.['im:artist']?.label).includes(createKeyFromString(value.toLowerCase()))) {
            flag.push({ ...item, displayTag: `${item?.['im:artist']?.label.slice(0,20)}-${item?.['im:name']?.label.slice(0,10)}...`})
        }
    })
    return flag;
}
