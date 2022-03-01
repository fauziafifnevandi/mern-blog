import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="" />
      </div>
      <div className="right">
        <p className="title">Form Login</p>
        <Input label="Email" placeholder="Email"></Input>
        <Gap height={20}></Gap>
        <Input label="Password" placeholder="Password"></Input>
        <Gap height={20}></Gap>
        <Button title="Login"></Button>
        <Gap height={60}></Gap>
        <Link title="Belum punya akun silahkan daftar"></Link>
      </div>
    </div>
  );
};

export default Login;
