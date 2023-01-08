function solve() {
    let buttonElement = document.querySelector('.admin-view .action button');
    let modules = {};



    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement == 'Select module') {
            return;
        }

        if (!modules[lectureModuleElement.value]) {
            modules[lectureModuleElement.value] = [];

        }
        let currentLecture = { name: lectureNameElement.value, data: formatDate(lectureDateElement.value) }
        modules[lectureModuleElement.value].push(currentLecture);

        lectureNameElement.value = '';
        lectureDateElement.value = '';
        lectureModuleElement.value = 'Select module';

        createTrainings(modules);


    });

    function createTrainings(modules) {
        let modulesElement = document.querySelector('.modules');
        modulesElement.innerHTML = '';

        for (const moduleName in modules) {
            let moduleElement = createModule(moduleName);
            let lectureListElement = document.createElement('ul');

            //sorting
            let lectures = modules[moduleName];
            lectures.sort((a, b) => a.date.localeCompare(b.date));

            lectures.forEach(({ name, date }) => {
                let lectureElement = createLecture(name, date);
                lectureListElement.appendChild(lectureElement);

                let deleteButtonElement = lectureElement.querySelector('button');
                deleteButtonElement.addEventListener('click', (e) => {
                    modules[moduleName] = modules[moduleName].filter(x => !(x.name == name && x.date == date));
                    if (modules[moduleName].length == 0) {
                        delete modules[moduleName];

                        e.currentTarget.closest('.modue').remove();
                    } else {
                        e.currentTarget.parentNode.remove();
                    }

                })


            });
            moduleElement.appendChild(lectureListElement);
            modulesElement.appendChild(moduleElement);

        }

    }


    function createModule(name) {
        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let headingElement = document.createElement('h3');
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        divElement.appendChild(headingElement);

        return divElement;

    }

    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');
        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${name} - ${date}`;

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Del';
        deleteButtonElement.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();
        })

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }



    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');
        return `${date} - ${time}`;
    }



};