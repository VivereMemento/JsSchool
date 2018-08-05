const list = document.querySelector('#folder-list');
const access = list;

const multiplyChoose = (target) => {
    const choosenElem = target;
    const parentOfChooseElem = choosenElem.parentElement;

    [...parentOfChooseElem.children].forEach(child => {
        if (child.nodeName === 'DIV') {
            [...child.children].forEach(node => {
                if (node.nodeName === 'SPAN') {
                    node.classList.add('choosen');
                } else if (node.nodeName === 'DIV') {
                    multiplyChoose(node);
                }
            });
        };
    });
};

const handleClickOnList = (e) => {

    if (e.target.classList.contains('folder-list__trigger')) {
        e.target.parentElement.classList.toggle('open');
    }

    if (e.target.classList.contains('trigger')) {
        const choosenItems = list.querySelectorAll('.choosen');

        if (choosenItems.length && !e.ctrlKey) {
            choosenItems.forEach(item => {
                item.classList.remove('choosen');
            })
        }

        if (e.shiftKey) {
            multiplyChoose(e.target);
        }

        e.target.classList.add('choosen');
    }
};

if (access) {
    list.addEventListener('click', handleClickOnList);
}