function solve() {
    let buttonElement = document.querySelector('.btn.create');



    buttonElement.addEventListener('click', function addButton(e) {
        e.preventDefault();

        let authorElement = document.querySelector('#creator');
        let titleElement = document.querySelector('#title');
        let categoryElement = document.querySelector('#category');
        let contentElement = document.querySelector('#content');


        //validation
        // if (authorElement.value === '' ||
        //    titleElement.value === '' ||
        //    categoryElement.value === '' ||
        //    contentElement.value === '') {

        //    authorElement.value = '';
        //    titleElement.value = '';
        //    categoryElement.value = '';
        //    contentElement.value = '';


        //    return;
        // }




        //article
        let articleElement = document.createElement('article');

        //title
        let postElement = document.createElement('h1');
        postElement.textContent = titleElement.value;

        //category
        let pCategoryElement = document.createElement('p');
        pCategoryElement.textContent = 'Category: ';
        let pCategoryStrongElement = document.createElement('strong');
        pCategoryStrongElement.textContent = categoryElement.value;
        pCategoryElement.appendChild(pCategoryStrongElement);

        //creator
        let pCreatorElement = document.createElement('p');
        pCreatorElement.textContent = 'Creator: ';
        let pCreatorStrongElement = document.createElement('strong');
        pCreatorStrongElement.textContent = authorElement.value;
        pCreatorElement.appendChild(pCreatorStrongElement);

        //content
        let pContentElement = document.createElement('p');
        pContentElement.textContent = contentElement.value;




        //buttons creation
        let divElement = document.createElement('div');
        divElement.classList.add("buttons");


        //delete button
        let delButtonElement = document.createElement('button');
        delButtonElement.textContent = 'Delete'
        delButtonElement.classList.add("btn");
        delButtonElement.classList.add("delete");


        //archive button
        let archButtonElement = document.createElement('button');
        archButtonElement.textContent = 'Archive';
        archButtonElement.classList.add("btn");
        archButtonElement.classList.add("archive");




        //adding del button functionality
        delButtonElement.addEventListener('click', function delButtFunc() {
            articleElement.remove();

        })

        //adding arch button functionality
        archButtonElement.addEventListener('click', function archButtFunc() {

            //only the title
            let titleToMove = archButtonElement.parentElement.parentElement.querySelector('h1');

            let archSectionOlElement = document.querySelector('.archive-section ol');
            let liElement = document.createElement('li');
            let LiElementList = Array.from(archSectionOlElement.querySelectorAll('li'));

            liElement.textContent = titleToMove.textContent;

            articleElement.remove();

            LiElementList.push(liElement);

            LiElementList.sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(liEl => archSectionOlElement.appendChild(liEl));

            //-----------------------------------------------------------
            //     let articleToArchive = e.target.parentElement.parentElement;
            //     let archiveOl = document.querySelector('.archive-section ol');

            //     let archiveLis = Array.from(archiveOl.querySelectorAll('li'));
            //     let articleTitleHeading = articleToArchive.querySelector('h1');
            //     let articleTitle = articleTitleHeading.textContent;

            //     let newTitleLi = document.createElement('li');
            //     newTitleLi.textContent = articleTitle;

            //     articleToArchive.remove();

            //     archiveLis.push(newTitleLi);
            //     archiveLis
            //         .sort((a, b) => a.textContent.localeCompare(b.textContent))
            //         .forEach(li => archiveOl.appendChild(li));




        })


        articleElement.appendChild(postElement);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pCreatorElement);
        articleElement.appendChild(pContentElement);

        //ataching buttons
        divElement.appendChild(delButtonElement);
        divElement.appendChild(archButtonElement);
        articleElement.appendChild(divElement);

        //postSection
        let postsElement = document.querySelector('.site-content main section');
        postsElement.appendChild(articleElement);








        // authorElement.value = '';
        // titleElement.value = '';
        // categoryElement.value = '';
        // contentElement.value = '';

    })


}
