import React, { useState } from 'react';
import { Subhead } from '../Components/Subhead';
import Allpageinfo from '../Components/Allpageinfo';
import Footer from '../Components/Footer';
import axios from 'axios';

const Account = ({ user , setUser}) => {
  const [signemail, setSignemail] = useState('');
  const [signpassword, setSignpassword] = useState('');

  const [loginemail, setLoginemail] = useState('');
  const [loginpassword, setLoginpassword] = useState('');

  const [userstatus, setUserstatus] = useState(0);
  const [loader, setLoader] = useState(0);

  const [sig, setSig] = useState(0);
  const [log, setLog] = useState(0);

  const apiurl = 'https://classyx-backend.onrender.com';

  const showLoader = () => {
    setLoader(1);
    setTimeout(() => {
      setLoader(0);
    }, 2000); // Hide loader after 2 seconds
  };

  const signsubmitfunc = async (e) => {
    e.preventDefault();
    if (signemail === '') {
      // alert("Please enter the email id for registration");
      setSig(1);
    } else if (signpassword === '') {
      // alert("Please enter the Password for registration");
      setSig(1);
    } else {
      axios.post(apiurl + "/signup", { email: signemail, password: signpassword }).then((res) => {
        if (res.data === "exist") {
         //  alert("The email id already exists");
          setSig(4);
        } else {
          setSignemail('');
          setSignpassword('');
          showLoader();
          setUserstatus(userstatus + 1);
          setSig(0);
          setUser(user+1)
        }
      }).catch((error) => {
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again.");
      });
    }
  };

  const loginsubmitfunc = async (e) => {
    e.preventDefault();
    if (loginemail === '') {
      // alert("Please enter the email id for login");
      setLog(1);
    } else if (loginpassword === '') {
      // alert("Please enter the Password for login");
      setLog(2);
    } else {
      axios.post(apiurl + "/login", { email: loginemail, password: loginpassword }).then((res) => {
        if (res.data === "exist") {
          setLoginemail('');
          setLoginpassword('');
          showLoader();
          setUserstatus(userstatus + 1);
          setLog(0);
          setUser(user+1)
        } else {
         //  alert("The email id or password is incorrect");
          setLog(4);
        }
      }).catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
      });
    }
  };

  return (
    <>
      <Subhead pname='Account' />
      <section className="my-[50px]">
        {loader ? (
          <div className="flex items-center justify-center bg-gray-100">
            <div className="spinner my-[100px] border-main-color"></div>
          </div>
        ) : (
          userstatus >= 1 ? (
            <div className='flex items-center justify-center bg-gray-100'>
              <h2 className='font-poppins text-[28px] text-center font-bold'>Successfully Logged in. Now you can <br></br> buy your favorite products.</h2>
            </div>
          ) : (
            <div className="w-[93%] mx-auto">
              <div className="main-account flex flex-wrap justify-center gap-[70px] lg:gap-[200px]">
                <form className="register flex flex-col items-start gap-[25px]">
                  <h3 className="font-poppins font-bold text-[30px]">Register</h3>
                  <div className="flex flex-col items-start gap-[25px]">
                    <div className="flex flex-col items-start gap-[14px]">
                      <label htmlFor="signEmail" className={sig === 1 ?  "font-poppins font-bold text-red-700 text-[16px]" : "font-poppins font-bold text-[16px]"}>Email Address</label>
                      <input type="text" id="signEmail" placeholder="Email Address" className={sig === 1 ? "border-[1px] border-red-400 rounded-[8px] py-[12px] pl-[8px] w-[360px]" :"border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]"}  value={signemail} onChange={(e) => setSignemail(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-start gap-[14px]">
                      <label htmlFor="signPassword" className={sig === 2 ? "font-poppins font-bold text-red-700 text-[16px]" : "font-poppins font-bold text-[16px]"}>Password</label>
                      <input type="password" id="signPassword" placeholder="Password" className={sig === 2 ? "border-[1px] border-red-400 rounded-[8px] py-[12px] pl-[8px] w-[360px]" :"border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]"} value={signpassword} onChange={(e) => setSignpassword(e.target.value)} />
                    </div>
                  
                     { sig === 4 ? <p className='text-[16px] text-red-700'>The User ID you enterd is already exist please enter <br></br> your email id and password in login section</p>:null}
                    
                    <div>
                      <p className="font-poppins font-medium text-[16px] w-[300px] lg:w-[450px]">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="" className="font-extrabold">privacy policy.</a></p>
                    </div>
                    <div>
                      <button type="submit" className="bg-none rounded-[5px] border border-black text-[15px] font-semibold px-[38px] py-[10px] hover:bg-black hover:text-white" onClick={signsubmitfunc}>Register</button>
                    </div>
                  </div>
                </form>
                <form className="login flex flex-col items-start gap-[25px]">
                  <h3 className="font-poppins font-bold text-[30px]">Login</h3>
                  <div className="flex flex-col items-start gap-[25px]">
                    <div className="flex flex-col items-start gap-[14px]">
                      <label htmlFor="loginEmail" className={log === 1 || log === 4 ? "font-poppins font-bold text-red-700 text-[16px]" : "font-poppins font-bold text-[16px]"}>Email Address</label>
                      <input type="text" id="loginEmail" placeholder="Email Address" className={log === 1 || log === 4 ? "border-[1px] border-red-400 rounded-[8px] py-[12px] pl-[8px] w-[360px]" :"border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]"}  value={loginemail} onChange={(e) => setLoginemail(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-start gap-[14px]">
                      <label htmlFor="loginPassword" className={log === 2 || log === 4 ? "font-poppins font-bold text-red-700 text-[16px]" : "font-poppins font-bold text-[16px]"}>Password</label>
                      <input type="password" id="loginPassword" placeholder="Password" className={log === 2 || log === 4 ? "border-[1px] border-red-400 rounded-[8px] py-[12px] pl-[8px] w-[360px]" :"border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]"} value={loginpassword} onChange={(e) => setLoginpassword(e.target.value)} />
                    </div>
                    { log === 4 ? <p className='text-[16px] text-red-700'>The Email id and password you entered is incorrect</p>:null}
                    <div className="flex items-center gap-[15px]">
                      <button type="submit" className="bg-none rounded-[5px] border border-black text-[15px] font-semibold px-[38px] py-[10px] hover:bg-black hover:text-white" onClick={loginsubmitfunc}>Log In</button>
                      <a href="" className="font-semibold font-poppins text-[15px]">Lost your Password?</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )
        )}
      </section>
      <Allpageinfo />
      <Footer />
    </>
  );
};

export default Account;
