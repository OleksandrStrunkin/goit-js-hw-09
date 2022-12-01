import Notiflix from 'notiflix';

const form = document.querySelector('.form')

form.addEventListener(`submit`, onSubmit);


function onSubmit(e) {
  e.preventDefault();
  
  let firstDelay = parseInt(e.currentTarget.delay.value);
  const delayStep = parseInt(e.currentTarget.step.value);
  const amount = parseInt(e.currentTarget.amount.value);


  for (let position = 1; position <= amount; position += 1) {
    const delay = firstDelay += position === 1 ? 0 : delayStep;
    
    console.log(delay);
    createPromise({ position, delay })
      .then(({ position, delay }) => {
    
    Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
    
    Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`)
      });
  }
}

function createPromise({position, delay}) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
    } else {
          reject({ position, delay });
    }
    }, delay)
  });
  
};













// function onSubmit(e) {
 
//   console.log(e)

//   for (let position = 1; position <= amount.value; position += 1) {
//     const delay = firstDelay.value + delayStep.value;
//     createPromise({position, delay}).then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`)
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`)
//   });
//   }
// }

