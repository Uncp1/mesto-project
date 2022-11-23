const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');
const AddCardForm = document.querySelector('#img-form');
const popupWindow = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('#popup-profile');
const popupAddCard = document.querySelector('#popup-add');
const profileForm = document.querySelector('#user-form');
const elementsContainer = document.querySelector('.elements')
const popupImg = document.querySelector('.popup_img');
const elementTemplate = document.querySelector('#element-template').content;
const profileName = document.querySelector('.profile__name');
const profileOccupation= document.querySelector('.profile__occupation');
const editFormName = document.querySelector('#form-name');
const editFormOccupation = document.querySelector('#form-occupation');
const formName = document.querySelector('#img-name');
const formLink = document.querySelector('#img-link');

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
}

function createCard(name, link) {
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

  return(element);
}

function addCard(name, link){
  const elementCard= createCard(name, link);
  elementsContainer.prepend(elementCard);
  return(name, link);
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

buttonOpenAddCardForm.addEventListener('click', function(){
  openPopup(popupAddCard);
});

buttonOpenEditProfileForm.addEventListener('click', function(){
  editFormName.value= profileName.textContent;
  editFormOccupation.value= profileOccupation.textContent;
  openPopup(popupProfile);
});

profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileOccupation.textContent = editFormOccupation.value;
  closePopup(popupProfile);
});

AddCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard(formName.value, formLink.value);
  AddCardForm.reset();
  closePopup(popupAddCard);
});


