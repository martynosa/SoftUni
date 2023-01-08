function getArticleGenerator(articles) {
    let divElement = document.querySelector('#content');

    return function () {
        if (articles.length > 0) {
            let article = articles.shift();
            let articleElement = document.createElement('article');
            articleElement.textContent = article;
            divElement.appendChild(articleElement);
        }
    }
}