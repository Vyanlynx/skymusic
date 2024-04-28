export const sortAlbums = (data: any) => {
    let sortByArtist: any = {}
    let sortByGerne: any = {}
    data?.feed?.entry.forEach((item: any) => {
        //sort based on ARTIST
        if (sortByArtist[item['im:artist'].label] && sortByArtist[item['im:artist'].label] !== undefined) {
            sortByArtist[item['im:artist'].label] = [...sortByArtist[item['im:artist'].label], item]
        } else {
            sortByArtist[item['im:artist'].label] = [item];
        }
        //Sort by Gerne
        if (sortByGerne[item.category.attributes.term]) {
            sortByGerne[item.category.attributes.term] = [...sortByGerne[item.category.attributes.term], item]
        } else {
            sortByGerne[item.category.attributes.term] = [item]
        }
    })
    return {
        artistWise: sortByArtist,
        genreWise: sortByGerne
    }
}