function solution(answers) {
    var answer = [];
    var ans_1 = [1,2,3,4,5];
    var ans_2 = [2,1,2,3,2,4,2,5];
    var ans_3 = [3,3,1,1,2,2,4,4,5,5];
    
    var num_1 = 0, num_2 = 0, num_3 = 0
    
    answers.forEach((ele, i) => {
        if (ele == ans_1[i % ans_1.length]) num_1 += 1;
        if (ele == ans_2[i % ans_2.length]) num_2 += 1;
        if (ele == ans_3[i % ans_3.length]) num_3 += 1;
    })
                   
    
    result = [num_1, num_2, num_3]
    var max = Math.max(num_1, num_2, num_3)
    answer = result.reduce((acc, el, i) => {
        if (el == max) acc.push(i+1)
        return acc
    },[])
        
    return answer;
}
