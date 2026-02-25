function solution(N, number) {
    if (N === number) return 1;

    const set_list = [];

    for (let cnt = 1; cnt <= 8; cnt++) {
        const partial = new Set();

        // N 이어붙이기
        partial.add(Number(String(N).repeat(cnt)));

        for (let i = 1; i < cnt; i++) {
            for (let op1 of set_list[i - 1]) {
                for (let op2 of set_list[cnt - i - 1]) {

                    partial.add(op1 + op2);
                    partial.add(op1 - op2);
                    partial.add(op1 * op2);
                    if (op2 !== 0) {
                        partial.add(Math.floor(op1 / op2));
                    }
                }
            }
        }
        if (partial.has(number)) return cnt;
        set_list.push(partial);
    }

    return -1;
}