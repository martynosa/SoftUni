function create(words) {
   let contentDiv = document.getElementById('content');


   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', showP);
      contentDiv.appendChild(div);
   }

   function showP(e) {
      let innerP = e.target.children[0];
      innerP.style.display = 'block';
   }


   console.log('TODO:...');
}