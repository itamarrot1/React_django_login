import React, { useContext, useState } from 'react'
import { Afterlog } from './Shop'
import MyUserName from './Username'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const context = useContext(MyUserName)
    const [msg, setmsg] = useState('')
    const navigate = useNavigate()

    const SERVER = 'http://127.0.0.1:8000/'


    const { username, setusername } = context
    const [password, setpassword] = useState('')

    // const [isLogin, setisLogin] = useState(false)



    const handleLogin = () => {
        if (username.length < 1) {
            console.log("please enter username");
        } else {
            window.axios.post(SERVER + 'login/', { username, password })
            .then(res =>{ console.log( (res.data))
             const token = res.data.access
             localStorage.setItem('token',token)
            }
        )
            navigate('/shop');
        
        }
    }
    

    return (

        <div className="d-flex justify-content-center align-items-center vh-100">
            <div class="card" style={{ maxWidth: '300px', textAlign: 'center' }}>
                <div class="card-body">
                    <div>
                        Username:
                        <br />
                        <br />
                        <input type='text' onChange={(e) => setusername(e.target.value)}></input>
                        <br />
                        <br />
                        password:
                        <br />
                        <br />
                        <input type='password' onChange={(e) => setpassword(e.target.value)}></input>
                        <br />
                        <br />
                        <button className='btn btn-primary' onClick={() => handleLogin()}>log-in</button>
                        {msg}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;