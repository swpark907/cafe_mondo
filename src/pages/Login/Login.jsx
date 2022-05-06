import { useState } from 'react';
import './Login.css';

const Login = () => {

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  return (
    <div className='app__login flex-center app__wrapper section_padding'>
      <h2>로그인</h2>
      <form className='login__form'>
        <input type="text" placeholder='아이디'/>
        <input type="text" placeholder='비밀번호'/>
        <button>로그인</button>
      </form>
    </div>
  );
};

export default Login;