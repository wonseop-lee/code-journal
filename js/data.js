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
  if (data.profile.username !== '') {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('profile-data', dataJSON);
  }
});

// var profileData = [];
// var previousProfileData = localStorage.getItem('profile-data');
// if (previousProfileData !== null){
//   profileData = JSON.parse(previousProfileData);
// };
