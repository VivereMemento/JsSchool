const getInfo = function () {
    alert('If you are not a robot, please, answer the questions');
    const promptName = prompt('What is your name', 'Please, type your name');
    const promptAge = prompt('How old are you', 'Please, type your age');
    const confirmResult = confirm(`Hello ${promptName}! You are ${promptAge} years old. Is it true?`);

    !confirmResult ? getInfo() : alert('Nice to meet you, ' + promptName);
};

getInfo();