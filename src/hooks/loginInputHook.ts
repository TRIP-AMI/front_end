import { useEffect, useState } from 'react';

const useLoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidInput, setInvalidInput] = useState(true);
  const [emptyInput, setEmptyInput] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,20}$/;

  useEffect(() => {
    if (email && password) {
      setEmptyInput(false);
      if (email.match(emailRegex) && password.match(passwordRegex)) {
        setInvalidInput(false);
      } else {
        setInvalidInput(true);
      }
    } else {
      setEmptyInput(true);
      setInvalidInput(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return { email, password, emptyInput, invalidInput, setEmail, setPassword };
};

export default useLoginInput;
