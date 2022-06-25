export const validators = {
  name(value) {
    return value.length >= 2 ? undefined : 'Name is too short';
  },

  email(value) {
    return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? undefined
      : 'Email is invalid';
  },

  password(value) {
    return value.match(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    )
      ? undefined
      : 'Password is too simple';
  },

  passwordConfirm(value, password) {
    return value === password ? undefined : 'Passwords dont match';
  },
};
// export function nameValidator(value = '') {
//   return value.length >= 2 ? false : 'Name is too short';
// }

// export function emailValidator(value = '') {
//   return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
//     ? false
//     : 'Email is invalid';
// }

// export function passwordValidator(value = '') {
//   return value.match(
//     /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
//   )
//     ? false
//     : 'Password is too simple';
// }

// export function confirmPasswordValidator(value = '', password) {
//   return value === password ? false : 'Passwords dont match';
// }
