import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../redux/Reducer/userReducer";

const AccountPage = () =>
{

    const dispatch = useDispatch();

    const [ inputUserNam, setInputUserNam ] = useState( "" )
    const [ inputEmail, setInputEmail ] = useState( "" )
    const [ inputPassWord, setInputPassWord ] = useState( "" )

    const [ isLogin, setIsLogin ] = useState( false );

    const [ loginEmail, setLoginEmail ] = useState( "" )
    const [ loginPassWord, setLoginPassWord ] = useState( "" )

    const handleRegister = () =>
    {
        dispatch( registerUser(
            {
                userName: inputUserNam,
                email: inputEmail,
                password: inputPassWord
            }
        ) )
    }

    const handleLogin = ( e ) =>
    {
        e.preventDefault();
        dispatch( loginUser( {
            email: loginEmail,
            password: loginPassWord
        } ) )
    }

    return (
        <div className="container1">
            <div className="image-section">
                <img src="https://png.pngtree.com/png-clipart/20250531/original/pngtree-messi-magic-png-image_21101995.png" alt="Lionel Messi playing soccer" />
            </div>
            <div className="col-2">
                <div className="form-conainer">
                    <div className="form-btn">
                        <span onClick={ () => setIsLogin( true ) }>Login</span>
                        <span onClick={ () => setIsLogin( false ) }>Register</span>
                        <hr
                            id="Indicator"
                            style={ {
                                transform: isLogin
                                    ? "translateX(0px)"
                                    : "translateX(100px)",
                                transition: "0.5s",
                            } } />
                    </div>
                    <form
                        id="LoginForm"
                        style={ {
                            transform: isLogin
                                ? "translateX(300px)"
                                : "translateX(0px)",
                            transition: "0.5s",
                        } }
                    >
                        <input type="text" placeholder="Email" onChange={ ( e ) => setLoginEmail( e.target.value ) } />
                        <input type="pass" placeholder="PassWord" onChange={ ( e ) => setLoginPassWord( e.target.value ) } />
                        <button type="submit" class="btn" onClick={ handleLogin }>Login</button>
                        <a href="">Forgot Password</a>
                    </form>
                    <form
                        id="RegForm"
                        style={ {
                            transform: isLogin
                                ? "translateX(300px)"
                                : "translateX(0px)",
                            transition: "0.5s",
                        } }
                    >
                        <input type="text" placeholder="UserName" onChange={ ( e ) => setInputUserNam( e.target.value ) } />
                        <input type="email" placeholder="Email" onChange={ ( e ) => setInputEmail( e.target.value ) } />
                        <input type="password" placeholder="PassWord" onChange={ ( e ) => setInputPassWord( e.target.value ) } />
                        <button type="submit" class="btn" onClick={ () => handleRegister() }>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;

