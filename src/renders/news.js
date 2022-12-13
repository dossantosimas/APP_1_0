import { getTeams, getTeamById, getPlayerById } from "../services/teams.services.js";

import {getNews, getNewsById} from "../services/news.services.js"

export const renderNewsPreview = async()=>{
    newsContainer.innerHTML = '';
    const newsList = await getNews();
    console.log(newsList);

    for (let i = 0; i < 3; i++) {
        
        const div = document.createElement('div');
        const img = document.createElement('img');
        const cardBody = document.createElement('div');
        const titleCard = document.createElement('h5');
        const bodyPreview = document.createElement('p');
        const parr = newsList[i].body.substring(0,50);

        div.classList.add('card', 'bg-dark', 'px-2', 'py-2');

        img.classList.add('card-img-top');
        img.setAttribute('src', newsList[i].image);
        img.style.width = '431';
        img.style.height = '216px';

        cardBody.classList.add('card-body');
        titleCard.classList.add('card.title', 'text-white');
        bodyPreview.classList.add('card-text', 'text-white');

        titleCard.innerText = newsList[i].title;
        bodyPreview.innerText= `${parr}...`

        cardBody.appendChild(titleCard);
        cardBody.appendChild(bodyPreview);
        div.appendChild(img);
        div.appendChild(cardBody);
        newsContainer.appendChild(div);

        div.addEventListener('click', ()=>{
            location.hash = `#news/newsId:${newsList[i].id}`;
            location.reload();
            getNewsByParams(newsList[i].id)
        })

        console.log(Date.parse(newsList[i].createdAt))
    }
}

export const getAllNews = async(id)=>{
    newsContainerBody.innerHTML = '';
    const newsList = await getNews();
    console.log(newsList);

    newsList.forEach(news => {
        const article = document.createElement('article');
        const divTitle = document.createElement('div');
        const title = document.createElement('h3');
        const img = document.createElement('img');
        const body = document.createElement('div');
        const parr = news.body.substring(0,100);
    
        article.classList.add('col-sm-8', 'col-md-8', 'col-lg-9');
        divTitle.classList.add('row', 'mb-2');
        title.classList.add('letra-blanco');
        img.classList.add('img-fluid', 'my-3', 'text-sm-center');
        body.classList.add('letra-blanco');
    
        title.innerText = news.title;
        img.setAttribute('src', news.image);
        body.innerText = parr;
    
        divTitle.appendChild(title);
        article.appendChild(divTitle);
        article.appendChild(img);
        article.appendChild(body);
        newsContainerBody.appendChild(article);
        
        article.addEventListener('click', ()=>{
            location.hash = `#news/newsId:${news.id}`;
            location.reload();
            getNewsByParams(news.id)
        })
    });
}

export const getNewsByParams = async(id)=>{
    newsDetailedContainer.innerHTML = '';
    const news = await getNewsById(id);

    // console.log(news);

    const article = document.createElement('article');
    const divTitle = document.createElement('div');
    const title = document.createElement('h3');
    const img = document.createElement('img');
    const body = document.createElement('div');

    article.classList.add('col-sm-8', 'col-md-8', 'col-lg-9');
    divTitle.classList.add('row', 'mb-2');
    title.classList.add('letra-blanco');
    img.classList.add('img-fluid', 'my-3', 'text-sm-center');
    body.classList.add('letra-blanco');

    title.innerText = news.title;
    img.setAttribute('src', news.image);
    body.innerText = news.body;

    divTitle.appendChild(title);
    article.appendChild(divTitle);
    article.appendChild(img);
    article.appendChild(body);
    newsDetailedContainer.appendChild(article);

}

export const renderPreviewSideNews = async(subcontainer, container)=>{

    const newsList = await getNews();
    console.log(newsList);

    for (let i = 0; i < 3; i++) {
        
        const div = document.createElement('div');
        const img = document.createElement('img');
        const cardBody = document.createElement('div');
        const titleCard = document.createElement('h5');
        const bodyPreview = document.createElement('p');
        const parr = newsList[i].body.substring(0,50);

        div.classList.add('card', 'bg-dark', 'px-2', 'py-2');

        img.classList.add('card-img-top');
        img.setAttribute('src', newsList[i].image);
        img.style.width = '431';
        img.style.height = '216px';

        cardBody.classList.add('card-body');
        titleCard.classList.add('card.title', 'text-white');
        bodyPreview.classList.add('card-text', 'text-white');

        titleCard.innerText = newsList[i].title;
        bodyPreview.innerText= `${parr}...`

        cardBody.appendChild(titleCard);
        cardBody.appendChild(bodyPreview);
        div.appendChild(img);
        div.appendChild(cardBody);
        subcontainer.appendChild(div);
        container.appendChild(newsSideContainer);

        div.addEventListener('click', ()=>{
            location.hash = `#news/newsId:${newsList[i].id}`;
            location.reload();
            getNewsByParams(newsList[i].id)
        })

        console.log(Date.parse(newsList[i].createdAt))
    }


}