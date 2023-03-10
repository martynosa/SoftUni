function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const bestRestaurantP = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#workers>p');

   function onClick() {
      const arr = JSON.parse(input.value);
      let restaurants = {};


      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];
         for (let worker of workersArr) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary });
         }
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         workers.sort((a, b) => b.salary - a.salary);
         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         };
         let bestRestaurantSalary = 0;
         let best = undefined;

         for (let name in restaurants) {
            if (restaurants[name].averageSalary > bestRestaurantSalary) {
               best = { name, ...restaurants[name] };
               bestRestaurantSalary = restaurants[name].averageSalary;
            }
         }
         bestRestaurantP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
         let workersResult = [];
         best.workers.forEach(worker => {
            workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
         });
         workersP.textContent = workersResult.join(' ');
      });
   }
}