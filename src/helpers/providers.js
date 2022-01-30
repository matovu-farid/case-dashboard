import { collection, getDocs } from 'firebase/firestore';
import { createHospitalmarkup } from './markup';
import { addEditListener } from './edit_providers';
import { db } from '../app';
import addRemoveMethods from './remove_methods';

const providerList = document.querySelector('.provider-list');

const displayDocs = async () => {
  const providers = await getDocs(collection(db, 'health_providers'));
  providers.forEach((snapshot) => {
    const li = document.createElement('li');

    const { id } = snapshot;
    li.id = `provider-${id}`;

    const data = snapshot.data();

    li.innerHTML = createHospitalmarkup(data, id);
    providerList.appendChild(li);
  });
  addRemoveMethods();
  addEditListener();
};

displayDocs();
