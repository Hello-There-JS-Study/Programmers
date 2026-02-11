

function solution(numbers) {
    // 1) 0,1 제외 최솟값 ~ 최댓값 보기
    // 2) 루트(최댓값) 까지 에라토스테네스 채로 걸르기
    // 3) 걸리지지 않은 것 count하기 
    var numList = numbers.split("").map(el => Number(el))
    // 이미 sort해서 줬을 수도
    // numList.sort((a,b) => a - b) 
    
    answer = 0
    p = []
    result = []
    
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed + arr[i];
                const copyArr = arr.slice();
                copyArr.splice(i, 1);

                result.push(newFixed);

                getPermutation(copyArr, newFixed);
            }
        }
    }
    
    getPermutation(numList, "")
    
    let sortedResult = new Set()
    sortedResult = [...new Set(result.map((el) => Number(el)))].sort((a,b) => a - b)
    const maxRoot = Math.floor(Math.sqrt(sortedResult[sortedResult.length - 1]))
    
    // 에라토스테네스의 채
    var result = []
    var ch = Array(sortedResult[sortedResult.length - 1]).fill(0).map((_,i) => i + 1)
    for (i = 2; i < maxRoot + 1; i++) {
        ch = ch.filter((el) => el !== 1)
        ch = ch.filter((c) => c % i !== 0 || c == i)
    }
    
    let cnt = 0

    sortedResult.forEach(ele => {
      if (ch.includes(ele)) cnt++
    })
    
    return cnt
    
}
