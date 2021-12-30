import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onLoginSubmitHandler = (event) => {
    event.preventDefault();

    if (Email === '') {
      alert('Email을 입력하세요.')
      return
    } 

    if (Password === '') {
      alert('Password를 입력하세요.')
      return
    } 

    // 로그인에서 받은 정보 서버에게 보내고 로그인 성공 시 myPage 화면으로 이동
  }

  const go = () => {
    document.location.href('/sign')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onLoginSubmitHandler}>
        <h3>Welcome to Gondew Login-App</h3><br/><br/><br/><br/>

        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} autoFocus />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} /><br/>

        <button type='submit' style={{ margin: '10px 0', background: 'skyblue', 
                            border: 0, fontSize:'15px', padding:'6px', cursor: 'pointer'}}>로그인</button>
        <Link to='/sign'>
          <button style={ {border: 0, fontSize:'15px', padding:'6px', width:'100%', cursor: 'pointer'}}>회원가입</button>
        </Link>
      </form>
    </div>
  )
}

export default LoginPage;
