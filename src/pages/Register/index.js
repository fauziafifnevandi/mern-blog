import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input label="Full Name" placeholder="Full Name"></Input>
        <Gap height={20}></Gap>
        <Input label="Email" placeholder="Email"></Input>
        <Gap height={20}></Gap>
        <Input label="Password" placeholder="Password"></Input>
        <Gap height={20}></Gap>
        <Button title="Register"></Button>
        <Gap height={60}></Gap>
        <Link title="Kembali ke Login"></Link>
      </div>
    </div>
  );
};

export default Register;
