import React ,{ useState} from 'react';
import PropTypes from 'prop-types'



/**
 * It takes a JSON object as a parameter, and sends it to the server. The server then returns a JSON
 * object.
 * @param credentials - {
 * @returns The response from the server.
 */
async function LoginUser(credentials) {
      return fetch('http://localhost:8080/api/auth/signin',{
          method: 'POST',
          header: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
      }).then(data => data.json())
    }



export default function Login({setToken}) {

/* A hook that allows you to use state in a functional component. */
      const [email, setEmail] = useState();
      const [password, setPassword] = useState()


/**
 * It takes the email and password from the form, and sends it to the backend to be validated. If the
 * validation is successful, it returns a token.
 * @param e - the event object
 */
      const handleSubmit = async (e) => {
          e.preventDefault()
          const token = await LoginUser({
               email,
               password
          })
          setToken(token)
          console.log(token)
      }


  return(

<div className=" background-image vw-100 vh-100 pt-10 ">
<div className="  h-100 col-auto align-self-center">
    <div className="card bg-transparent flex-row ">
            <div className="col-6 glass align-items-center d-flex justify-content-center "> <h4>Specter CRM</h4></div>


            <div className="col bg-white">  
                <form className="p-5" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal ">Please sign in</h1>
                
                    <div className="form-floating my-1">
                      <input type="email" className="form-control" required onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating my-1">
                      <input type="password" className="form-control" required onChange={(e)=>setPassword(e.target.value)} placeholder="Password" autoComplete='On'/>
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                
                    <div className="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                      </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                  </form>
            </div>
    </div>
</div>
</div>

)
}

/* A prop type checker. It checks if the prop is a function. */
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}