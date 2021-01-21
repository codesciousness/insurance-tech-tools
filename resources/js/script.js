const plusButtons = document.getElementsByClassName('fa-plus');
const minusButtons = document.getElementsByClassName('fa-minus');

function activateQuestion(element) {
    const parent = this.parentElement;
    parent.className += ' -active';
    const siblings = [...parent.children].filter(el => el.nodeType === 1 && el !== element);
    siblings.forEach(sibling => sibling.className += ' -active');
    const contentChildren = [...siblings[1].children];
    contentChildren.forEach(child => child.className += ' -active');
}

function deactivateQuestion(element) {
    let parent = this.parentElement;
    parent.className = parent.className.replace(' -active', '');
    let siblings = [...parent.children].filter(el => el.nodeType === 1 && el !== element);
    siblings.forEach(sibling => sibling.className = sibling.className.replace(' -active', ''));
    const contentChildren = [...siblings[1].children];
    contentChildren.forEach(child => child.className = child.className.replace(' -active', ''));
}

[...plusButtons].forEach(element => element.addEventListener('click', activateQuestion));
[...minusButtons].forEach(element => element.addEventListener('click', deactivateQuestion));