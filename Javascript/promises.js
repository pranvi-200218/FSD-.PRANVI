function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f1');
            resolve('f1 resolved');
        }, 1000);
        reject('f1 rejected');
    });
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f2');
            resolve('f2 resolved');
        }, 1000);
    });
}
f1().then(f2)
    .catch((error) => {
        console.log(error);
    });