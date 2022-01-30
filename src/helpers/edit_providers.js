import { doc, getDoc } from 'firebase/firestore';
import { db } from '../app';
import { showForm } from './switch_view';

export const fillData = (data) => {
  showForm();
  const nameInput = document.querySelector('#name');
  nameInput.value = data.name;
  const contactInput = document.querySelector('#contact');
  contactInput.value = data.contact;
  const latitudeInput = document.querySelector('#latitude');
  latitudeInput.value = data.latitude;
  const longitudeInput = document.querySelector('#longitude');
  longitudeInput.value = data.longitude;
};
export const addEditListener = () => {
  const listItems = document.querySelectorAll('.provider-list  li');

  listItems.forEach((listItem) => {
    listItem.addEventListener('dblclick', async () => {
      const docId = listItem.id.match(/(?<=provider-)\w+/);
      try {
        const docRef = doc(db, `health_providers/${docId}`);
        const docSnapshot = await getDoc(docRef);
        const docData = docSnapshot.data();
        const { contact, name, position: { geopoint: { latitude, longitude } } } = docData;
        const obj = {
          contact, name, latitude, longitude,
        };
        fillData(obj);
        const form = document.querySelector('form');
        form.id = docId;
      } catch (e) {
        console.log(`path with docID-${docId} doesnot exist`);
      }
    });
  });
};
