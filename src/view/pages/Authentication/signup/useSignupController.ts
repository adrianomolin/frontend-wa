import { useAuth } from '@app/hooks/useAuth';
import { useErrors } from '@app/hooks/useErrors';
import { authService } from '@app/services/authService';
import { User } from '@app/types/User';
import isEmailValid from '@app/utils/isEmailValid';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

type SignupParams = Omit<User, '_id' | 'role'>;

export function useSignupController() {
  const [user, setUser] = useState<SignupParams>({
    name: '',
    email: '',
    password: ''
  });

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();
  const { signin } = useAuth();

  function handleInputChange(input: keyof SignupParams, value: typeof user[keyof SignupParams]) {
    setUser(prevState => ({
      ...prevState,
      [input]: value,
    }));

    if (!value) {
      setError({ fieldName: input, message: 'Campo obrigatório.' });
    } else {
      removeError(input);
    }

  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async(data: SignupParams) => {
      return authService.signup(data);
    }
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isEmailValid(user.email)) {
      setError({ fieldName: 'email', message: 'Insira um e-mail válido.' });
      return;
    }

    try {
      const { accessToken } = await mutateAsync(user);

      signin(accessToken);
    } catch (error) {
      toast.error('Ocorreu um erro ao criar a conta.');
    }
  }

  return {
    isLoading: isPending,
    handleSubmit,
    handleInputChange,
    errors,
    getErrorMessageByFieldName,
    user
  };
}
