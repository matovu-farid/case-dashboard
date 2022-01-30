const viewProviders = document.querySelector('#view-providers');
const viewProviderSection = document.querySelector('#providers-section');
const addProviderSection = document.querySelector('#add-provider-section');

export const showProviders = ()=>{
  viewProviderSection.classList.remove('no-display');
  addProviderSection.classList.add('no-display');
}

viewProviders.addEventListener('click', () => {
  showProviders()
});

export const showForm = ()=>{
  viewProviderSection.classList.add('no-display');
  addProviderSection.classList.remove('no-display');
}

const providersForm = document.querySelector('#add-providers');
providersForm.addEventListener('click', () => {
  showForm()
});
