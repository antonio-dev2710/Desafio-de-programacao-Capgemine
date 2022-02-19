export default function handlePassword(password) {
  if (password.length < 6) {
    return 6 - password.length;
  }

  const letrasMaiusculas = /[A-Z]/;
  const letrasMinusculas = /[a-z]/;
  const numeroString = /[0-9]/;
  const special = /[!|@|#|$|%|^|&|*|(|)|-]/;

  let numberToStrong = 0;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasSpecial = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    if (letrasMaiusculas.test(password[i])) {
      hasUpperCase = true;
    }

    if (letrasMinusculas.test(password[i])) {
      hasLowerCase = true;
    }

    if (numeroString.test(password[i])) {
      hasNumber = true;
    }

    if (special.test(password[i])) {
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