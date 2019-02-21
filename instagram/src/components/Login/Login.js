import React, { Component } from 'react';
import styled from 'styled-components';
import IGLogo from '../../assets/iglogo.png';
import Facebook from '../../assets/facebooklogo.gif';

const FormPage = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const FormBox = styled.div`
  width: 348px;
  height: 343px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
`;

const LogoDiv = styled.div`
  width: 175px;
  height: 51px;
  margin: 22px 86.5px 12px;
`;

const InstaLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginDiv = styled.div`
  width: 266px;
  height: 36px;
  margin: 0 40px 6px 40px;
  background-color: #fafafa;
  border: 1px solid #efefef;
  border-radius: 3px;
`;

const LogInput = styled.input`
  width: 250px;
  height: 20px;
  margin: 0 0 3px 0;
  padding: 9px 0 7px 8px;
  color: #262626;
  background-color: #fafafa;
  border: none;
  outline: none;
  text-decoration: none;
`;

const LoginButton = styled.button`
  width: 268px;
  height: 30px;
  margin: 8px 40px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #3897f0;
  border: none;
  border-radius: 3px;
  outline: none;
`;

const BufferDiv = styled.div`
  width: 268;
  height: 15;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 40px 18px 40px;
`;

const BorderLine = styled.div`
  width: 106.52px;
  height: 1px;
  border-bottom: 1px solid #efefef;
`;

const BORder = styled.p`
  width: 18.984px;
  height: 14px;
  margin: 0 18px;
  color: #999;
  font-size: 14px;
  font-weight: 600;
`;

const FaceDiv = styled.div`
  width: 268px;
  height: 20px;
  margin: 8px 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #385185;
  font-weight: 600;
`;

const FaceIcon = styled.img.attrs({
  alt: "Facebook icon",
  src: `${Facebook}`
})`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 1px;
`;

const Forgot = styled.div`
  width: 348px;
  height: 14px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #003569;
  font-size: 12px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <FormPage>
        <FormBox>
          <LogoDiv>
            <InstaLogo alt="Instagram logo" src={IGLogo} />
          </LogoDiv>
          <LoginDiv>
            <LogInput
              type="text"
              placeholder="Phone number, username, or email"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </LoginDiv>
          <LoginDiv>
            <LogInput
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </LoginDiv>
          <LoginButton color="success" size="large" onClick={this.handleLoginSubmit}>
            Log In
          </LoginButton>
          <BufferDiv>
            <BorderLine />
            <BORder>OR</BORder>
            <BorderLine />
          </BufferDiv>
          <FaceDiv>
            <FaceIcon />
            <p>Log in with Facebook</p>
          </FaceDiv>
          <Forgot>
          <p>Forgot password?</p>
        </Forgot>
        </FormBox>
      </FormPage>
    );
  }
}

export default Login;