import { useAuth } from '@app/hooks/useAuth';
import { useErrors } from '@app/hooks/useErrors';
import { authService } from '@app/services/authService';
import { User } from '@app/types/User';
import isEmailValid from '@app/utils/isEmailValid';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

type SigninParams = Omit<User, '_id' | 'role' | 'name'>;

export function useAuthController() {
  const [user, setUser] = useState<SigninParams>({
    email: '',
    password: ''
  });

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();
  const { signin } = useAuth();

  function handleInputChange(input: keyof SigninParams, value: typeof user[keyof SigninParams]) {
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
    mutationFn: async(data: SigninParams) => {
      return authService.signin(data);
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
      console.log(error);
      toast.error('Credenciais inválidas. Tente novamente.');
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
