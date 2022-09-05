// def of ||: expr1 || expr2 -> if 'expr1' is true return 'expr1'
//                           -> if 'expr1' is false return 'expr2'

// def of &&: expr1 && expr2 -> if 'expr1' is true return 'expr2'
//                           -> if 'expr1' is false return 'expr1'

const test1 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return true; }

    if (a() || b()) {
        c();
    }

    return {
        name: 'test1',
        answer,
        result,
        correct: answer === result
    };
}

const test2 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }

    if (a() || b()) {
        c();
    }

    return {
        name: 'test2',
        answer,
        result,
        correct: answer === result
    };
}

const test3 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return true; }

    if (a() && b()) {
        c();
    }

    return {
        name: 'test3',
        answer,
        result,
        correct: answer === result
    };
}

const test4 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }

    if (a() && b()) {
        c();
    }

    return {
        name: 'test4',
        answer,
        result,
        correct: answer === result
    };
}

const test5 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }

    if (a() || b() && c()) {
        d();
    }

    return {
        name: 'test5',
        answer,
        result,
        correct: answer === result
    };
}

const test6 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() || b() && c()) {
        d();
    }

    return {
        name: 'test6',
        answer,
        result,
        correct: answer === result
    };
}

const test7 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return false; }
    const d = () => { result += 'd'; return true; }
    
    if(a() || b() && c()) {
        d();
    }

    return {

        name: 'test7',
        answer,
        result,
        correct: answer === result
    };
}

const test8 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return false; }
    const d = () => { result += 'd'; return true; }
    
    if(a() || b() && c()) {
        d();
    }

    return {
        name: 'test8',
        answer,
        result,
        correct: answer === result
    };
}

const test9 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if((a() || b()) && c()) {
        d();
    }

    return {
        name: 'test9',
        answer,
        result,
        correct: answer === result
    };
}

const test10 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if((a() || b()) && c()) {
        d();
    }

    return {
        name: 'test10',
        answer,
        result,
        correct: answer === result
    };
}

const test11 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if((a() || b()) && c()) {
        d();
    }

    return {
        name: 'tes11',
        answer,
        result,
        correct: answer === result
    };
}

const test12 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() || (b() && c())) {
        d();
    }

    return {
        name: 'tes12',
        answer,
        result,
        correct: answer === result
    };
}

const test13 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() || (b() && c())) {
        d();
    }

    return {
        name: 'tes13',
        answer,
        result,
        correct: answer === result
    };
}

const test14 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() || (b() && c())) {
        d();
    }

    return {
        name: 'tes14',
        answer,
        result,
        correct: answer === result
    };
}

const test15 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return false; }
    const d = () => { result += 'd'; return true; }
    
    if(a() || (b() && c())) {
        d();
    }

    return {
        name: 'tes15',
        answer,
        result,
        correct: answer === result
    };
}

const test16 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() && b() || c()) {
        d();
    }

    return {
        name: 'test16',
        answer,
        result,
        correct: answer === result
    };
}

const test17 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() && b() || c()) {
        d();
    }

    return {
        name: 'test17',
        answer,
        result,
        correct: answer === result
    };
}

const test18 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return false; }
    const d = () => { result += 'd'; return true; }
    
    if(a() && b() || c()) {
        d();
    }

    return {
        name: 'test18',
        answer,
        result,
        correct: answer === result
    };
}

const test19 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() && (b() || c())) {
        d();
    }

    return {
        name: 'test19',
        answer,
        result,
        correct: answer === result
    };
}

const test20 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return false; }
    const b = () => { result += 'b'; return true; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() && (b() || c())) {
        d();
    }

    return {
        name: 'test20',
        answer,
        result,
        correct: answer === result
    };
}

const test21 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return true; }
    const d = () => { result += 'd'; return true; }
    
    if(a() && (b() || c())) {
        d();
    }

    return {
        name: 'test21',
        answer,
        result,
        correct: answer === result
    };
}

const test22 = (answer = '') => {
    let result = '';

    const a = () => { result += 'a'; return true; }
    const b = () => { result += 'b'; return false; }
    const c = () => { result += 'c'; return false; }
    const d = () => { result += 'd'; return true; }
    
    if(a() && (b() || c())) {
        d();
    }

    return {
        name: 'test22',
        answer,
        result,
        correct: answer === result
    };
}


const results = [
    test1(), test2(), test3(), test4(),
    test5(), test6(), test7(), test8(),
    test9(), test10(), test11(), test12(),
    test13(), test14(), test15(), test16(),
    test17(), test18(), test19(), test20(),
    test21(), test22()
];

