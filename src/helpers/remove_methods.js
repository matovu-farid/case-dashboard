import {db} from '../app';
import {deleteDoc, doc, } from 'firebase/firestore'

 export const addRemoveMethods = ()=>{
   
    const removeButtons = document.querySelectorAll('.remove');
    
    removeButtons.forEach(button=>{
        
        button.addEventListener('click',()=>{
            const li = document.querySelector(`#provider-${button.id}`)
            const path = `health_providers/${button.id}`
            
            li.classList.add('no-display');
            const provider = doc(db,path);
            
            deleteDoc(provider);
        })
    })
}

export const callAllRemoveMethods = ()=>{
   
    const removeButtons = document.querySelectorAll('.remove');
    
    removeButtons.forEach(button=>{
        let event = new Event('click')
        button.dispatchEvent(event)
        
       button.click()
    })
}
