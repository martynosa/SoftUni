function solve() {
    let buttonElement = document.querySelector('#add');
    buttonElement.addEventListener('click', addButtFunc);

    function addButtFunc(e) {
        e.preventDefault();

        let taskInputElement = document.querySelector('#task');
        let descriptionInputElement = document.querySelector('#description');
        let dateInputElement = document.querySelector('#date');


        if (taskInputElement.value !== '' &&
            descriptionInputElement.value !== '' &&
            dateInputElement.value !== '') {
            // console.log(taskInputElement.value);
            // console.log(descriptionInputElement.value);
            // console.log(dateInputElement.value);

            let openParentElement = document.querySelector('.orange').parentElement.parentElement;
            let openDivElement = openParentElement.querySelectorAll('div')[1];

            //element creations
            let articleElement = document.createElement('article');
            //task
            let h3Element = document.createElement('h3');
            h3Element.textContent = taskInputElement.value;
            //descr
            let descrPElement = document.createElement('p');
            descrPElement.textContent = `Description: ${descriptionInputElement.value}`;
            //date
            let datePElement = document.createElement('p');
            datePElement.textContent = `Due Date: ${dateInputElement.value}`;

            //buttons creation
            let buttDivElement = document.createElement('div');
            buttDivElement.classList.add('flex');
            //start
            let startButtElement = document.createElement('button')
            startButtElement.classList.add('green');
            startButtElement.textContent = 'Start';
            startButtElement.addEventListener('click', startFunc);
            buttDivElement.appendChild(startButtElement);
            //delete
            let deleteButtElement = document.createElement('button')
            deleteButtElement.classList.add('red');
            deleteButtElement.textContent = 'Delete';
            deleteButtElement.addEventListener('click', delFunc);
            buttDivElement.appendChild(deleteButtElement);

            //appending
            articleElement.appendChild(h3Element);
            articleElement.appendChild(descrPElement);
            articleElement.appendChild(datePElement);
            articleElement.appendChild(buttDivElement);
            openDivElement.appendChild(articleElement);


            function startFunc() {
                let inProgressArticleElement = articleElement;
                articleElement.remove();
                let inDivElement = document.querySelector('#in-progress');
                let oldDiv = inProgressArticleElement.querySelector('div')
                inProgressArticleElement.removeChild(oldDiv);

                let newDiv = document.createElement('div');
                newDiv.classList.add('flex')
                let finishButtElement = document.createElement('button');
                finishButtElement.classList.add('orange');
                finishButtElement.textContent = 'Finish';
                finishButtElement.addEventListener('click', finishFunc);
                newDiv.appendChild(deleteButtElement);
                newDiv.appendChild(finishButtElement);

                inProgressArticleElement.appendChild(newDiv)

                inDivElement.appendChild(inProgressArticleElement);



            }



            function delFunc(e) {
                let target = e.target;
                let deltedArticle = target.parentElement.parentElement;
                deltedArticle.remove();

            }

            function finishFunc() {
                let inDivElement = document.querySelector('#in-progress');
                let inProgressArticleElement = inDivElement.querySelector('article');

                let compParentElement = document.querySelectorAll('.wrapper section')[3];
                let compDivElement = compParentElement.querySelectorAll('div')[1];
                let divButtons = inProgressArticleElement.querySelector('div');
                inProgressArticleElement.removeChild(divButtons);

                compDivElement.appendChild(inProgressArticleElement);

            }



        }


    }



}