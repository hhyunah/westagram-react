function Login() {
    return (
        <div className = 'loginBox'>
            <h1>Westagram</h1>
            
            <div className = 'inputPart' id = 'inputPart'>
                <input className = 'id' type ='text' placeholder=" 전화번호, 사용자 이름 또는 이메일"></input>
                <input className = 'password' type = 'password' required placeholder = ' 비밀번호'></input>
                <input className = 'button' type = 'button' value = '로그인'></input>
            </div>

            <div class = 'helpPart'>
                <h2>비밀번호를 잊으셨나요?</h2>
            </div>
        </div>
    );
}

export default Login;