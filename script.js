const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const newButton = document.querySelector('.profile__add-button');
const edditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('#add-button');
const popupWindow = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('#popup-profile');
const popupAdd = document.querySelector('#popup-add');
const saveButton = document.querySelector('.form__button');
const elementsContainer = document.querySelector('.elements')

let inputs = document.querySelectorAll('input');
let profileName = document.querySelector('.profile__name');
let profileOccupation= document.querySelector('.profile__occupation');
inputs[0].value = profileName.textContent;
inputs[1].value = profileOccupation.textContent;  // нужно связать с плейсхолдером -\_/-

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputs[0].value;
  profileOccupation.textContent = inputs[1].value;;
  popupWindow[0].classList.remove('popup_opened');
}

function addElement(name, link) {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const popupImg = element.querySelector('.popup_img');
  const deleteButton = element.querySelector('.element__delete');

  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  }); 

  element.querySelector('.element__pic').addEventListener('click', function() {
    popupImg.classList.add('popup_opened');
  }); 

  deleteButton.addEventListener('click', function(){
    console.log('buba');
    const binItem = deleteButton.closest('.element');
    console.log(binItem);
    binItem.remove();
    inItem.parentNode.removeChild(binItem);
  })

  element.querySelector('.element__name').textContent = name;
  element.querySelector('.element__pic').setAttribute('alt', name);
  element.querySelector('.element__pic').setAttribute('src', link);
  element.querySelector('.element__modal-name').textContent = name;
  element.querySelector('.element__modal-pic').setAttribute('src', link);
  element.querySelector('.element__modal-pic').setAttribute('alt', name);
  elementsContainer.append(element);

  let exitButton = document.querySelectorAll('.popup__exit-button');
  exitButton.forEach((btn)=>{
    btn.addEventListener('click', function (evt) {
      evt.target.closest('.popup').classList.remove('popup_opened');
    }); 
  });
}

initialCards.forEach((item) => {
  addElement(item.name, item.link);
}); 

newButton.addEventListener('click', function(){
  popupAdd.classList.add('popup_opened');
});

edditButton.addEventListener('click', function edditProfile(){
  popupProfile.classList.add('popup_opened');
});

saveButton.addEventListener('click', handleFormSubmit);

addButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  const name = document.querySelector('#img-name');
  const link = document.querySelector('#img-link');

  addElement(name.value, link.value);
  
  name.value = '';
  link.value = '';

  evt.target.closest('.popup').classList.remove('popup_opened');
});