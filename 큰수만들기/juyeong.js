function solution(number, k) {
    var answer ='';
    for(let num of number) {
        while (k>0 && answer && parseInt(answer[answer.length-1]) < parseInt(num)) {
            answer = answer.slice(0,-1);
            k-=1;
        }
        answer+= num;
    }
    return answer.slice(0,answer.length-k);
}