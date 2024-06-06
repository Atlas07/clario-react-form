export const ERROR_KEYS = {
  EMAIL_INVALID: "emailInvalid",
  PASSWORD_LENGTH: "passwordLength",
  PASSWORD_MIXED_CASE: "PASSWORD_MIXED_CASE",
  PASSWORD_DIGIT: "passwordDigit",
};

export const ERROR_MAP = {
  [ERROR_KEYS.EMAIL_INVALID]: "Should be valid email",
  [ERROR_KEYS.PASSWORD_LENGTH]: "8 characters or more (no spaces), 64 max",
  [ERROR_KEYS.PASSWORD_MIXED_CASE]: "Uppercase and lowercase letters",
  [ERROR_KEYS.PASSWORD_DIGIT]: "At least one digit",
};

export const EMAIL_REGEX =
  /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validatePassword = (value) => {
  const errors = []
  const trimmedValue = value.replace(/\s/g, "");

  if (trimmedValue.length < 8 || trimmedValue.length > 64) {
    errors.push(ERROR_KEYS.PASSWORD_LENGTH)
  }
  if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
    errors.push(ERROR_KEYS.PASSWORD_MIXED_CASE)
  }
  if (!/\d/.test(value)) {
    errors.push(ERROR_KEYS.PASSWORD_DIGIT)
  }

  return errors.length > 0 ? errors.join("|") : ""
};