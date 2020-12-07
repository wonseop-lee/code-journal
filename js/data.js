/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('profile-data', dataJSON);
});

var previousProfileData = localStorage.getItem('profile-data');
if (previousProfileData !== null) {
  data = JSON.parse(previousProfileData);
}
