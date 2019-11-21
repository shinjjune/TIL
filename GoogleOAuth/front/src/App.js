import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import authAxios from "./authAxios";

export default function App() {
  const responseGoogle = async res => {
    const token = res.tokenId;
    const expires = new Date(res.tokenObj.expires_at).toUTCString();

    document.cookie = `Authorization = ${token};expires=${expires}`;
    const email = res.profileObj.email;
    const name = res.profileObj.name;
    const checkUser = await axios.get(
      `http://localhost:3000/user/check?email=${email}`
    );
    if (checkUser.data.result) {
      alert("로그인 성공!");
      // react-router-dom => history.push('/home')
    } else if (checkUser.data.result === false) {
      // 회원가입 진행
      await axios.post("http://localhost:3000/user/join", { name, email });
      alert("회원가입 및 로그인 성공");
      // redirect 등 커스터마이징 가능
    } else {
      console.log(checkUser.data.error);
    }
  };
  const responseGoogleError = response => {
    console.log(response);
  };
  const getUser = async () => {
    const { data } = await authAxios().get("http://localhost:3000/user");
    console.log(data);
  };

  return (
    <div>
      <GoogleLogin
        clientId="970533117577-fvqpsvlm0rlq8nkf1fo7736vmabrk61a.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogleError}
        cookiePolicy={"single_host_origin"}
      />
      <button onClick={getUser}>유저 정보 가져오기</button>
    </div>
  );
}
