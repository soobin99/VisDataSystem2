var userName;

function writeSubmit(event){
  event.preventDefaults();
  userName = document.querySelector('.nameForm').querySelector('input').value;
  console.log(userName);
  //document.location.href=""
}

export {userName};
