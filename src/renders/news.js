// contenedor newsContainer

import {getNews} from "../services/news.services.js"

export const renderNewsPreview = async()=>{
    const newsList = await getNews();
    console.log(newsList);

    newsList.forEach(news => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const cardBody = document.createElement('div');
        const titleCard = document.createElement('h5');
        const bodyPreview = document.createElement('p');
        const parr = news.body.substring(0,80);

        div.classList.add('card', 'bg-dark', 'px-2', 'py-2');

        img.classList.add('card-img-top');
        img.setAttribute('src', news.image);
        img.style.width = '431';
        img.style.height = '216px';

        cardBody.classList.add('card-body');
        titleCard.classList.add('card.title', 'text-white');
        bodyPreview.classList.add('card-text', 'text-white');

        titleCard.innerText = news.title;
        bodyPreview.innerText= `${parr}...`

        cardBody.appendChild(titleCard);
        cardBody.appendChild(bodyPreview);
        div.appendChild(img);
        div.appendChild(cardBody);
        newsContainer.appendChild(div);
    });
}
