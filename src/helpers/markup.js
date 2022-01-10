export const createHospitalmarkup  = (hospital,id)=>{
    return `
    <p>${hospital.name}</p>
    <button class="remove" id="${id}">Remove</button>
    `;
  }