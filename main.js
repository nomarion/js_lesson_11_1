'use strict';

const lessonTitle = "ДЗ 11.1. Таблиця піфагора";

const bodyH1 = createElement('h1', lessonTitle);

const table = createElement('table');
table.classList.add('table');
const tableThead = createElement('thead', null, table);
const tableTheadTr = createElement('tr', null, tableThead);
const tBody = createElement('tbody', null, table);

function tableItemGenerator() {
    createElement('th', "*", tableTheadTr)
    for (let i = 1; i <= 10; i++) {
        createElement('th', i, tableTheadTr)
        if (i <= 10) {
            const tableTr = createElement('tr', null, tBody);
            createElement('th', i, tableTr);
            for (let t = 1; t <= 10; t++) {
                createElement('td', i * t, tableTr);
            }
        }
    }
}

function createElement(tag, text, parent) {
    const newEl = document.createElement(tag);
    if (text !== undefined && text !== null) {
        newEl.textContent = text;
    }
    if(parent !== undefined && parent !== null) {
        parent.append(newEl);
    }
    return newEl;
}

tableItemGenerator()
document.body.append(bodyH1, table);