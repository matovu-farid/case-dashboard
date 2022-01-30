import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../app';

const addRemoveMethods = () => {
  const removeButtons = document.querySelectorAll('.remove');

  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const li = document.querySelector(`#provider-${button.id}`);
      const path = `health_providers/${button.id}`;

      li.classList.add('no-display');
      const provider = doc(db, path);

      deleteDoc(provider);
    });
  });
};

export { addRemoveMethods as default };
