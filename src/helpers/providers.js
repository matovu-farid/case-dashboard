import { collection ,getDocs} from "firebase/firestore";
import {createHospitalmarkup} from "./markup"
import {db} from '../app';
import { addRemoveMethods ,callAllRemoveMethods} from "./remove_methods";


const providerList = document.querySelector('.provider-list')

 getDocs(collection(db,'health_providers')).then((querySnapshots)=>{

   querySnapshots.forEach(snapshot=>{
     const li = document.createElement('li');

     const id = snapshot.id;
     li.id = `provider-${id}`;
     
     const data = snapshot.data()
     
     li.innerHTML = createHospitalmarkup(data,id);
     providerList.appendChild(li)
   })
   addRemoveMethods()
})

const clearProviders = document.querySelector('#clear-providers');
clearProviders.addEventListener('click',()=>{
  callAllRemoveMethods()
})