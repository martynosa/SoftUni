
let loadBtn = document.getElementById('btnLoad');
loadBtn.addEventListener('click', getPhonebook)

let createBtn = document.getElementById('btnCreate');
createBtn.addEventListener('click', createPhone);

let baseUrl = 'http://localhost:3030/jsonstore/phonebook';

async function getPhonebook() {
    let phonebookResponse = await fetch(baseUrl);
    let phonebook = await phonebookResponse.json();

    //spam prevent
    let liElements = document.querySelectorAll('li').forEach(liEl => liEl.remove());

    //test print
    console.log(phonebook);
    Object.values(phonebook).forEach(value => console.log(value.person));

    //phonebook
    Object.values(phonebook).forEach(value => {
        let ulElement = document.getElementById('phonebook');
        let liElement = document.createElement('li');

        liElement.dataset.id = value._id;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete'
        deleteBtn.addEventListener('click', deletePhone);

        liElement.textContent = `${value.person}: ${value.phone}`



        ulElement.appendChild(liElement);
        liElement.appendChild(deleteBtn);





    });

}

async function deletePhone(e) {
    let elToDelete = e.currentTarget.parentElement;
    let id = elToDelete.dataset.id;
    let uriDelete = `http://localhost:3030/jsonstore/phonebook/${id}`
    console.log(id);


    let deleteResponse = await fetch(uriDelete, {
        method: 'Delete'
    });
    let deleteResult = await deleteResponse.json();
    console.log(deleteResult);
    if (deleteResponse.status === 200) {
        elToDelete.remove()
    }

}

async function createPhone() {
    let personElement = document.getElementById('person')
    let personInput = personElement.value;

    let phoneElement = document.getElementById('phone');
    let phoneinput = phoneElement.value;

    let newContact = {
        "person": personInput,
        "phone": phoneinput
    }

    let createContactResponse = await fetch(baseUrl, {
        header: {
            'application-type': 'application/json'
        },
        method: 'Post',
        body: JSON.stringify(newContact)
    });
    let createContactResult = await createContactResponse.json();
    console.log(createContactResult);

    let ulElement = document.getElementById('phonebook');
    let liElement = document.createElement('li');
    liElement.dataset.id = createContactResult._id;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete'
    deleteBtn.addEventListener('click', deletePhone);

    liElement.textContent = `${createContactResult.person}: ${createContactResult.phone}`
    ulElement.appendChild(liElement);
    liElement.appendChild(deleteBtn);

}



