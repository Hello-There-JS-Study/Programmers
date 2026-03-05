function solution(genres, plays) {
   const map = new Map()
   let answer = []

   for (let i = 0; i < genres.length; i++) {
      if (!map.has(genres[i])) {
         map.set(genres[i], { total: 0, songs: [] })
      }

      map.get(genres[i]).total += plays[i]
      map.get(genres[i]).songs.push({ id: i, play: plays[i] })
   }

   const sortedGenreEntries = [...map.entries()].sort((a, b) => b[1].total - a[1].total)

   sortedGenreEntries.forEach(([genre, info]) => {
      info.songs.sort((a, b) => b.play - a.play)

      info.songs.slice(0, 2).forEach((song) => answer.push(song.id))
   })

   return answer
}
