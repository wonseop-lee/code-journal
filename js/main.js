const $avatarInput = document.querySelector("input[name='avatar']");
const $imgSrc = document.querySelector('.avatar-image');

$avatarInput.addEventListener('input', function (event) {
  $imgSrc.setAttribute('src', event.target.value);
});

const $form = document.querySelector('form');

const $username = document.querySelector("input[name='username']");
const $fullname = document.querySelector("input[name='fullname']");
const $loca = document.querySelector("input[name='location']");
const $bio = document.querySelector('#bio');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  data.profile.username = $username.value;
  data.profile.fullName = $fullname.value;
  data.profile.location = $loca.value;
  data.profile.avatarUrl = $avatarInput.value;
  data.profile.bio = $bio.value;

  form.reset();
  imgSrc.setAttribute('src', 'images/placeholder-image-square.jpg');
});

function renderProfile(profileData) {
  let profileJSON = localStorage.getItem('profile-data');//////
  let profileParsed = JSON.parse(profileJSON);///////

  let viewProfile = document.createElement('div');
  let pageTitle = document.createElement('h1');
  let contentContainer = document.createElement('div');
  let col1 = document.createElement('div');
  let img = document.createElement('img');
  let col2 = document.createElement('div');
  let row1 = document.createElement('div');
  let p1 = document.createElement('p');
  let i1 = document.createElement('i');
  let row2 = document.createElement('div');
  let p2 = document.createElement('p');
  let i2 = document.createElement('i');
  let row3 = document.createElement('div');
  let p3 = document.createElement('p');

  viewProfile.setAttribute('data-view', 'profile');
  viewProfile.setAttribute('class', 'container');
  pageTitle.setAttribute('class', 'page-title column-full');
  contentContainer.setAttribute('class', 'row');
  col1.setAttribute('class', 'col-1 column-half');
  img.setAttribute('class', 'avatar-image');
  img.setAttribute('src', profileData.profile.avatarUrl);
  img.setAttribute('alt', 'placeholder');
  col2.setAttribute('class', 'col-2 column-half');
  row1.setAttribute('class', 'row-input');
  i1.setAttribute('class', 'far fa-user');
  row2.setAttribute('class', 'row-input');
  i2.setAttribute('class', 'fas fa-map-marker-alt');
  row3.setAttribute('class', 'row-input');

  viewProfile.append(pageTitle, contentContainer);
  pageTitle.append(profileData.profile.fullName);
  contentContainer.append(col1, col2);
  col1.append(img);
  col2.append(row1, row2, row3);
  row1.append(p1);
  p1.append(i1, profileData.profile.username);
  row2.append(p2);
  p2.append(i2, profileData.profile.location);
  row3.append(p3);
  p3.append(profileData.profile.bio);

  return viewProfile;
};

const $views = document.querySelectorAll('main > div');

function viewSwap(dataView){
  for (let i = 0; i < $views.length; i++){
    if ($views[i].dataset.view === dataView){
      $views[i].setAttribute('class', 'container');
    } else {
      $views[i].setAttribute('class', 'container hidden');
    }
  }
};
