import { geohashForLocation } from 'geofire-common';
import {
  collection, addDoc, GeoPoint, doc, getFirestore,
} from 'firebase/firestore';
import { app, db } from '../app';

export const form = document.querySelector('form');

const getPosition = (form) => {
  const latitude = parseFloat(form.latitude.value);
  const longitude = parseFloat(form.longitude.value);
  const hash = geohashForLocation([latitude, longitude]);

  const point = new GeoPoint(latitude, longitude);

  return {
    geohash: hash,
    geopoint: point,
  };
};

const allFieldsGot = () => {
  const inputs = document.querySelectorAll('input');
  let result = true;
  inputs.forEach((input) => {
    const errorDiv = document.querySelector(`#${input.id}-error`);
    if (input.validity.valueMissing) {
      errorDiv.textContent = `The ${input.id} is required`;
      result = false;
    }
  });

  return result;
};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (allFieldsGot()) {
    const hospital = {
      name: form.name.value,
      contact: form.contact.value,
      position: getPosition(form),
    };
    addDoc(collection(db, 'health_providers'), hospital);
    form.reset();
  }
});

const maps = document.querySelector('#maps');
maps.addEventListener('click', () => {
  const url = 'https://www.google.co.ug/maps/@0.3399436,32.5712095,15z';
  window.open(url, '_blank');
});
