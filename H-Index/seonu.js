function solution(cit) {
    let h = cit.length
    
    for (let i=0; i< cit.length; i++) {
        let result = cit.sort((a,b) => a - b).slice(i).every((el) => el >= h)
        if (result) return h
        h -= 1
    }
    return h;
}
