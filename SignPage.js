import React, { useRef, useState } from 'react';


const style = { margin: '10px 0', border: 0, background: 'skyblue', padding: '3.5px', cursor: 'pointer' };

function SignPage() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfrimPassword, setConfrimPassword] = useState("")
  const [name, setName] = useState("")
  const [brith, setbrith] = useState("")
  const [major, setmajor] = useState("")
  const [hobby, sethobby] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfrimPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onBirthHandler = (event) => {
    setbrith(event.currentTarget.value)
  }

  const onMajorHandler = (event) => {
    setmajor(event.currentTarget.value)
  }

  const onHobbyHandler = (event) => {
    sethobby(event.currentTarget.value)
  }

  // ID 중복확인하는 method(Onclick)

  const OnSignSubmitHandler = (event) => {
    event.preventDefault();

    // temp
    if (Email === '' || Password === '' || ConfrimPassword === '' || name === '' || brith === '' || major === '' || hobby === '') {
      alert('내용을 전부 입력해주세요.')
    }

    if (Password !== ConfrimPassword) {
      return alert("비밀번호가 서로 다릅니다.")
    }

    // 서버에 데이터 전송 후 회원가입이 완료되면 login하라는 경고창을 띄우고 login 페이지로 보내기
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={OnSignSubmitHandler}>
        <h3>Sign-in</h3><br />

        <input type="email" value={Email} onChange={onEmailHandler} placeholder='Email' autoFocus />

        <button style={style}> 중복확인</button>

        <input type="password" value={Password} onChange={onPasswordHandler} placeholder='Password' /><br />

        <input type="password" value={ConfrimPassword} onChange={onConfirmPasswordHandler} placeholder='Confrim Password' /><br />

        <input type="text" value={name} onChange={onNameHandler} placeholder='name' /><br />

        <input type="date" value={brith} onChange={onBirthHandler} placeholder='brith' /><br />

        <input type="text" value={major} onChange={onMajorHandler} placeholder='major' /><br />

        <input type="text" value={hobby} onChange={onHobbyHandler} placeholder='hobby' /><br />

        <button type='submit' style={style}>회원가입 완료</button>
      </form>
    </div>
  )
}

export default SignPage