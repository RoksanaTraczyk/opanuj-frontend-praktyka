import { ZodError } from "zod";
import { FlightScannerFormSchema, type FormValues } from "./form-schema";

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errorContainer = document.querySelector('#errors') as HTMLUListElement;

function renderErrors(error: ZodError) {
  errorContainer.innerHTML = '';
  error.errors.forEach((error) => {
    const listItem = document.createElement('li');
    listItem.textContent = error.message;
    errorContainer.appendChild(listItem);
  });
}

function cleanErrors() {
  errorContainer.innerHTML = '';
}


function validateForm(values: FormValues) {
  try {
    FlightScannerFormSchema.parse(values);
    cleanErrors();
  } catch (error) {
    if (error instanceof ZodError) {
      renderErrors(error);
    }
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries()) as unknown as FormValues;
  validateForm(values);
});
