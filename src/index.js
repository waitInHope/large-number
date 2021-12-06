
export default function add(a = '', b = '') {

    // 添加变量类型保护
    if(typeof a != 'string') {
        a = a + '';
    }

    if(typeof b != 'string') {
        b = b + '';
    }

    let i = a.length - 1;
    let j = b.length - 1;
    let res = '';
    let carry = 0;

    while(i >=0 || j >= 0) {
        let x = 0;
        let y = 0;
        if(a[i]) {
            x = +a[i];
        }
        if(b[j]) {
            y = +b[j];
        }

        let sum = x + y + carry;
        if(sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }

        res = sum + res;
        i--;
        j--;
    }

    if(carry > 0) {
        res = carry + res;
    }

    return res;
}

// 测试案例
// add('1', '999')
// add('999', '1')
// add('123', '321')
// add('9999999999999999999999999999999999999999999', '1')