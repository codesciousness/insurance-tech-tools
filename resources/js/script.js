const boxes = document.querySelectorAll('.faqs__box');
const questionCircles = document.querySelectorAll('.fa-question-circle');
const questions = document.querySelectorAll('.faqs__question');
const answers = document.querySelectorAll('.faqs__answer');
const plusButtons = document.querySelectorAll('.fa-plus');
const minusButtons = document.querySelectorAll('.fa-minus');

const removeActive = array => {
    array.forEach(el => el.className = el.className.replace(' -active', ''));
}

const deactivate = () => {
    [boxes, questionCircles, questions, answers, plusButtons, minusButtons].forEach(removeActive);
}

function activate() {
    if (this.className.includes(' -active')) {
        deactivate();
    }
    else {
        deactivate();
        this.className += ' -active';
        const directChildren = [...this.children];
        directChildren.forEach(child => child.className += ' -active');
        const contentChildren = [...directChildren[1].children];
        contentChildren.forEach(child => child.className += ' -active');
    }
}

boxes.forEach(el => el.addEventListener('click', activate));
