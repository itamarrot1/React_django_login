import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Register = () => {
    const SERVER = 'http://127.0.0.1:8000/'
    const navigate = useNavigate()
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [msg, setmsg] = useState('')



    const regiser = () => {
      window.axios.post(SERVER + 'register/' , {username , password})
      .then( res=> {
        if (res.data.error) {
            alert(res.data.error)
        }else{
      navigate('/log-in')
    }
})
}

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div class="card" style={{ maxWidth: '300px', textAlign: 'center' }}>
                <div class="card-body">
                    <div>Register here!
                        <br />
                        <br />
                        <input type='text' placeholder='username' onChange={(e) => setusername(e.target.value)}></input>
                        <br />
                        <br />
                        <br />
                        <input type='password' placeholder='password' onChange={(e) => setpassword(e.target.value)}></input>
                        <br />
                        <br />
                        <br />
                        <button className='btn btn-primary' onClick={()=> regiser()}>register</button>
                        <br/>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register