import { useState } from 'react';

interface ErrorsProps {
  fieldName: string,
  message: string,
}

export function useErrors() {
  const [errors, setErrors] = useState<ErrorsProps[]>([]);

  function setError({ fieldName, message }: ErrorsProps) {
    const errorAlreadyExists = errors.find((error) => error.fieldName === fieldName);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { fieldName, message }
    ]);
  }

  function removeError(fieldName: string) {
    setErrors(prevState => prevState.filter(
      error => error.fieldName !== fieldName
    ));
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error) => error.fieldName === fieldName)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
