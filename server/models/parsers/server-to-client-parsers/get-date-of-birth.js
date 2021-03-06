'use strict';

function dateOfBirth(application) {
  let data_of_birth = '';
  if(application.date_of_birth){
    data_of_birth = {
      day: (new Date(application.date_of_birth).getDate()).toString(),
      month: (new Date(application.date_of_birth).getMonth() + 1).toString(),
      year: (new Date(application.date_of_birth).getFullYear()).toString()
    }
  }
  return data_of_birth;

}

module.exports = dateOfBirth;