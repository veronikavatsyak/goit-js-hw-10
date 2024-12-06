import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const fulfilledInput = document.querySelector('input[value="fulfilled"]');
const rejectedInput = document.querySelector('input[value="rejected"]');

form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const delay = parseInt(inputDelay.value, 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilledInput.checked) {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else if (rejectedInput.checked) {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  })
    .then(value => {
      iziToast.success({
        title: 'OK',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: value,
        messageColor: 'white',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: 'green',
        theme: 'dark',
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: error,
        messageColor: 'white',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: 'red',
        theme: 'dark',
        position: 'topRight',
      });
    });
}
