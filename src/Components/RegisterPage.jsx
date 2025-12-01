import{ useState } from 'react'
import img from "./chat-img.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const handlerSubmit = (event) => {

        event.preventDefault()

        console.log({name,email,password});
        

        axios.post("http://localhost:4001/RegisterRouter", { name, email, password })


            .then((res) => {
               console.log(res);
                alert("succesfull ")
                navigate("/login")
                localStorage.setItem("messnger",JSON.stringify(res.data))
            })
            .catch((err) => {
               if(err.res){
                alert("Error:"+err.res.data.message)
               }
            })
    }


    return (
        <div className='login-container'>
            <div className='login-img'>
                <img src={img} alt="" />
            </div>

            <div className='login-input'>

                <form onSubmit={handlerSubmit}>
                    <h1 style={{ textAlign: "center", color: "skybluedw" }}>Create Your account </h1>
                    <div>
                        <input style={{ backgroundColor: "#f4f5f8" }} type="text"
                            placeholder='Enter your name'
                            onChange={(e) => { setName(e.target.value) }}
                            value={name}
                        />
                    </div>

                    <div>
                        <input style={{ backgroundColor: "#f4f5f8" }} type="text"
                            placeholder='Enter your email'
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                        />
                    </div>

                    <div>
                        <input style={{ backgroundColor: "#f4f5f8" }} type="password"
                            placeholder='Enter your password'
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                        />
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
