import { useEffect, useRef, useState } from 'react/cjs/react.production.min';
import './Register.css';

const ID_REGEX = '';
const PW_REGEX = '';

const Register = () => {

  const idRef = useRef();

  const [id, setId] = useState('');
  const [validId, setValidId] = useState(false);
  const [idFocus, setIdFocus] = useState(false);

  const [pw, setPw] = useState('');
  const [validPw, setValidPw] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);

  const [matchPw, setMatchPw] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    idRef.current.focus();
  }, [])


  return (
    <div>
    </div>
  );
};

export default Register;