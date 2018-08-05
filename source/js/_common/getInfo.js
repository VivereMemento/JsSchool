const getInfo = function () {
    alert('If you are not a robot, please, answer the questions');
    const promptName = prompt('What is your name', 'Please, type your name');
    const promptAge = prompt('How old are you', 'Please, type your age');
    const confirmResult = confirm(`Hello ${promptName}! You are ${promptAge} years old. Is it true?`);

    !confirmResult ? getInfo() : alert('Nice to meet you, ' + promptName);
};

const access = document.querySelector('#get-info');

if (access) getInfo();
// const str = 'aaa bbb ccc';
// function getIndexes(str, t) {
//     let pos = -1;
//     do {
//         pos = str.indexOf(t, pos + 1);
//         if (pos >= 0) console.log(pos);
//     } while (pos >= 0);
// }
// getIndexes(str, ' ');
//
// const o = {
//     a: 'a',
//     b: 'b',
//     c: 'c'
// };
// const getKeys = obj => {
//     for (let key in obj) {
//         console.log(key, obj[key]);
//     }
// };
//
// getKeys(o);
//
// const obj = Object.create(null);
// obj.name = 'd';
// obj.age = '22';
//
// getKeys(obj);
//
// const arr = [1,2,3];

// const f = (arr) => {
//     for (let value of arr) {
//         console.log(value)
//     };
// };
// f(arr);

