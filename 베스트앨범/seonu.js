function solution(genres, plays) {
    var genresWithPlay = new Map()
    var genreList = new Set(genres)
    var bestGenrePlay = new Map()
    var result = []
    
    for(let i=0; i< genres.length; i++) {
        if(!genresWithPlay.get(genres[i])) genresWithPlay.set(genres[i], [])
        genresWithPlay.get(genres[i]).push([i, plays[i]])
    }
    for([key, value] of genresWithPlay.entries()) {
        value.sort((a,b) => b[1] - a[1])
        bestGenrePlay.set(key, value.reduce((acc, item) => {return acc + item[1]},0))
        genresWithPlay.set(key, value.slice(0,2))
    }
    

    let sortedPlay = [...bestGenrePlay.entries()].sort((a,b) => b[1] - a[1])
    for (let i=0 ; i< sortedPlay.length; i++) {
        let genre = sortedPlay[i][0]
        let res = genresWithPlay.get(genre)
        for(ele of res) {
            result.push(ele[0])
        }
    }
    return result
}
