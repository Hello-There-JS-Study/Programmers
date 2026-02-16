function solution(k, dungeons) {
    var answer = -1;
    let per = [];
    function get_permutations(arr) {
        const results = [];
        if (arr.length===1) return [arr];
        arr.forEach((fixed,index,origin) => {
            const rest = [...origin.slice(0,index),...origin.slice(index+1)];
            const permutations = get_permutations(rest);
            const attached = permutations.map((permutation) => [fixed, ...permutation]);
            results.push(...attached);
        });
        return results;    
    }
    const permutations = get_permutations(dungeons);
    for (const permutation of permutations) {
        let number = 0;
        let current = k;
        for (const i of permutation) {
            const [need, consume] = i;
            if (current-need < 0) {
                break;
            }
            else {
                number += 1;
                current = current - consume;
            }
        }
        answer = Math.max(number, answer);
    }
    return answer;
}