// 구명 보트 복습
function solution(people, limit) {
    people.sort((a,b) => a-b);
    let answer = 0,
    passengers = 0,
    start = 0,
    end = people.length - 1;
    while (start < end) {
        const cur = people[start] + people[end]
        if (cur <= limit) {
            passengers += 2;
            answer += 1;
            start +=1
        }
        end -= 1;
    }
    answer += (people.length - passengers);
    return answer;
}