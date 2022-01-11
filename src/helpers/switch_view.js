const viewProviders = document.querySelector('#view-providers');
const viewProviderSection = document.querySelector('#providers-section');
const addProviderSection = document.querySelector('#add-provider-section');

viewProviders.addEventListener('click', () => {
  viewProviderSection.classList.remove('no-display');
  addProviderSection.classList.add('no-display');
});

const providersForm = document.querySelector('#add-providers');
providersForm.addEventListener('click', () => {
  viewProviderSection.classList.add('no-display');
  addProviderSection.classList.remove('no-display');
});
