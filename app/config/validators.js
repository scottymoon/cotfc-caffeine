const requiredField = value => (value ? undefined : 'Required');
const requiredFieldWithName = name => value => (value ? undefined : name ? `${name} is required` : 'Required');
const validEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value => value && value.length < min ? `Must be at least ${min} characters` : undefined;
const equalLength = len => value => value && value.length !== len ? `Must be ${len} characters` : undefined;

export {
  equalLength,
  maxLength,
  minLength,
  requiredField,
  requiredFieldWithName,
  validEmail,
};