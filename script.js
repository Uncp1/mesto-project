const newButton = document.querySelector('.profile__add-button');
const edditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('#add-button');
const popupWindow = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('#popup-profile');
const popupAdd = document.querySelector('#popup-add');
const saveButton = document.querySelector('.form__button');
const elementsContainer = document.querySelector('.elements')
const popupImg = document.querySelector('.popup_img');
const elementTemplate = document.querySelector('#element-template').content;
const profileName = document.querySelector('.profile__name');
const profileOccupation= document.querySelector('.profile__occupation');
const name = document.querySelector('#img-name');
const link = document.querySelector('#img-link');

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
}

function addCard(name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = element.querySelector('.element__delete');
  const cardImg = element.querySelector('.element__pic');
  element.querySelector('.element__name').textContent = name;
  cardImg.setAttribute('alt', name);
  cardImg.setAttribute('src', link);

  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  }); 

  deleteButton.addEventListener('click', function(){
    const binItem = deleteButton.closest('.element');
    binItem.remove();
  })

  element.querySelector('.element__pic').addEventListener('click', function() {
    openPopup(popupImg);
    cardPopupImg = popupImg.querySelector('.element__modal-pic');
    popupImg.querySelector('.element__modal-name').textContent = name;
    cardPopupImg.setAttribute('src', link);
    cardPopupImg.setAttribute('src', link);
  }); 

  elementsContainer.insertBefore(element, elementsContainer.firstChild);
}

initialCards.forEach((item) => {
  addCard(item.name, item.link);
}); 

const buttonsClosePopup = document.querySelectorAll('.popup__exit-button');
  buttonsClosePopup.forEach((btn)=>{
    btn.addEventListener('click', function (evt) {
      closePopup(evt.target.closest('.popup'));
    }); 
  });

newButton.addEventListener('click', function(){
  openPopup(popupAdd);
});

edditButton.addEventListener('click', function(){
  document.querySelector('#form-name').value= profileName.textContent;
  document.querySelector('#form-occupation').value= profileOccupation.textContent;
  openPopup(popupProfile);
});

saveButton.addEventListener('click', handleFormSubmit);

addButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addCard(name.value, link.value);
  name.value = '';
  link.value = '';
  closePopup(evt.target.closest('.popup'));
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = document.querySelector('#form-name').value;
  profileOccupation.textContent = document.querySelector('#form-occupation').value;
  closePopup(evt.target.closest('.popup'));
}
