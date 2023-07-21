import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo)
// const data = JSON.parse(JSON.stringify(dataInfo))

const content = document.querySelector('.content')

data.forEach(({ id, url, name, surname, age}) => {
    const div = document.createElement('div');
    div.classList.add('.card');
    content.appendChild(div);

    const idEl = document.createElement('p');
    idEl.classList.add('.card-id');
    idEl.textContent = `ID ${id}`;
    div.appendChild(idEl)

    const imgEl = document.createElement('img');
    imgEl.classList.add('.card-img');
    imgEl.src = url;
    imgEl.width = 300;
    imgEl.height = 300;
    div.appendChild(imgEl)

    const titleEl = document.createElement('h3');
    titleEl.classList.add('.card-title');
    titleEl.textContent = `${name} ${surname}`;
    div.appendChild(titleEl)

    const ageEl = document.createElement('h6');
    ageEl.classList.add('.card-age');
    ageEl.textContent = `Age: ${age} лет`;
    div.appendChild(ageEl)
})
