
export const Validation = (
  customInputValidationCheck = [],
  element = document
) => {
  let validate = true;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const collection: any = element.querySelectorAll("input ,  textarea , select");
  for (let i = 0; i < collection.length; i++) {
    // eslint-disable-next-line prefer-const
    let x :any= collection[i];

    if (collection[i].name) {
      collection[i].style.border = "";

      if (collection[i].required && !collection[i].value) {
        console.log(`collection[i].name`, collection[i].name);
        validate = false;
        collection[i].style.border = "1px solid red";

        if (x.previousSibling) {
          x.previousSibling.classList.add("requiredMessage");
        } else {
          x.parentElement.classList.add("requiredMessage");
        }
      }

      if (customInputValidationCheck && customInputValidationCheck.length) {
        if (
          customInputValidationCheck.includes(collection[i].name) &&
          !collection[i].value
        ) {
          validate = false;
          if (collection[i].name === "description") {
            x.parentElement.classList.add("requiredMessage");
          }
          collection[i].style.border = "1px solid red";
        }
      }
    }
  }
  if (!validate) {
    toast(false, "Required fields can not be empty");
  }
  return validate;
};
