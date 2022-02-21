export default function handlePassword(password) {
  if (password.length < 6) {
    return 6 - password.length;
  }

  const capitalLetters = /[A-Z]/;
  const smallLetters = /[a-z]/;
  const numeroString = /[0-9]/;
  const specialCcharacter = /[!|@|#|$|%|^|&|*|(|)|-]/;

  let numberToStrong = 0;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasSpecial = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    if (capitalLetters.test(password[i])) {
      hasUpperCase = true;
    }

    if (smallLetters.test(password[i])) {
      hasLowerCase = true;
    }

    if (numeroString.test(password[i])) {
      hasNumber = true;
    }

    if (specialCcharacter.test(password[i])) {
      hasSpecial = true;
    }
  }

  if (!hasUpperCase) {
    numberToStrong++;
  }
  if (!hasLowerCase) {
    numberToStrong++;
  }
  if (!hasNumber) {
    numberToStrong++;
  }
  if (!hasSpecial) {
    numberToStrong++;
  }

  return numberToStrong;
}
