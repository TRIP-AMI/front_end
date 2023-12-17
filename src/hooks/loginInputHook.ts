import { useEffect, useState } from 'react';
import Regex from '@/constants/regex';

const useLoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidInput, setInvalidInput] = useState(true);
  const [emptyInput, setEmptyInput] = useState(true);

  useEffect(() => {
    if (email && password) {
      setEmptyInput(false);
      if (email.match(Regex.email) && password.match(Regex.password)) {
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
