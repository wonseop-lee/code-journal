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

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  data.profile.username = $username.value;
  data.profile.fullName = $fullname.value;
  data.profile.location = $loca.value;
  data.profile.avatarUrl = $avatarInput.value;
  data.profile.bio = $bio.value;

  $form.reset();
  $imgSrc.setAttribute('src', 'images/placeholder-image-square.jpg');

  viewSwap('profile');
});

function renderProfile(profileDataObject) {
  const viewProfile = document.createElement('div');
  viewProfile.setAttribute('data-view', 'profile');
  viewProfile.setAttribute('class', 'container');

  const pageTitle = document.createElement('h1');
  pageTitle.setAttribute('class', 'page-title column-full');

  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('class', 'row');

  const col1 = document.createElement('div');
  col1.setAttribute('class', 'col-1 column-half');

  const img = document.createElement('img');
  img.setAttribute('class', 'avatar-image');
  img.setAttribute('src', profileDataObject.profile.avatarUrl);
  img.setAttribute('alt', 'placeholder');

  const col2 = document.createElement('div');
  col2.setAttribute('class', 'col-2 column-half');

  const row1 = document.createElement('div');
  row1.setAttribute('class', 'row-input');

  const p1 = document.createElement('p');

  const i1 = document.createElement('i');
  i1.setAttribute('class', 'far fa-user');

  const row2 = document.createElement('div');
  row2.setAttribute('class', 'row-input');

  const p2 = document.createElement('p');

  const i2 = document.createElement('i');
  i2.setAttribute('class', 'fas fa-map-marker-alt');

  const row3 = document.createElement('div');
  row3.setAttribute('class', 'row-input');

  const p3 = document.createElement('p');

  viewProfile.append(pageTitle, contentContainer);
  pageTitle.append(profileDataObject.profile.fullName);
  contentContainer.append(col1, col2);
  col1.append(img);
  col2.append(row1, row2, row3);
  row1.append(p1);
  p1.append(i1, ' ' + profileDataObject.profile.username);
  row2.append(p2);
  p2.append(i2, ' ' + profileDataObject.profile.location);
  row3.append(p3);
  p3.append(profileDataObject.profile.bio);

  return viewProfile;
}

const $views = document.querySelectorAll('main > div');

function viewSwap(dataView) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].dataset.view === dataView) {
      $views[i].setAttribute('class', 'container');
      data.view = dataView;
      if (dataView === 'profile') {
        $views[i].innerHTML = '';
        var renderedView = renderProfile(data);
        $views[i].append(renderedView);
      }
    } else {
      $views[i].setAttribute('class', 'container hidden');
    }
  }
}
