import {useState} from "react"
import axios from "axios"

const projectID = "be9244c7-bf9a-4257-8d63-7a58fe5196aa"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
            setError('')
        } catch (err) {
            setError('Your credentials are incorrect')
            console.log(err)
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={ (e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={ (e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>

                <h1>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm