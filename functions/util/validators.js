const isEmpty = string => {
  if(string.trim() === '') return true;
  return false;
}

const isEmail = email => {
  // eslint-disable-next-line
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email.match(regEx)) return true;
  return false;
}

exports.validateSignupData = (data) => {
  // Field data validation
  let errors = {};

  if(isEmpty(data.email)){
    errors.email = 'Must not be empty';
  }else if(!isEmail(data.email)){
    errors.email = 'Must be a valid email address';
  }

  if(isEmpty(data.password)) errors.password = 'Must not be empty'
  if(data.password.length < 6) errors.password = 'Password should be at least 6 characters'
  if(data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords must match'
  if(isEmpty(data.handle)) errors.handle = 'Must not be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}

exports.validateLoginData = data => {
  // Field data validation
  let errors = {};

  if(isEmpty(data.email)){
    errors.email = 'Must not be empty';
  }else if(!isEmail(data.email)){
    errors.email = 'Must be a valid email address';
  }

  if(isEmpty(data.password)) errors.password = 'Must not be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}

exports.reduceUserDetails = data => {
  let userDetails = {};

  if(!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if(!isEmpty(data.website.trim())){
    if(data.website.trim().substring(0, 4) !== 'http'){
      userDetails.website = `http://${data.website.trim()}`
    }else userDetails.website = data.website;
  }
  if(!isEmpty(data.location.trim())) userDetails.location = data.location;
  return userDetails;
}