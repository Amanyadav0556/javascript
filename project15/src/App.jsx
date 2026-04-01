 // Validation function
const validate = (form) => {
  let newErrors = {};

  // Email validation
  if (!form.email) {
    newErrors.email = "Email is required";
  } 
  else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Invalid email format";
  }

  // Password validation
  if (!form.password) {
    newErrors.password = "Password is required";
  } 
  else if (form.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  return newErrors; // return all errors
};

// Handle submit
const handleSubmit = (e) => {
  e.preventDefault(); // prevent page reload

  const errors = validate(form);

  if (Object.keys(errors).length > 0) {
    setErrors(errors);
  } else {
    console.log("Form submitted successfully");
  }
};