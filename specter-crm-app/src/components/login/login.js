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
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
      }
      
      ).then(data => data.json())
    }



  async function registerUser(credentials) {
      return fetch('http://localhost:8080/api/auth/signup',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
      }
      
      ).then(data => data.json())
    }



export default function Login({setToken}) {

/* A hook that allows you to use state in a functional component. */
      const [firstName, setfirstName] = useState();
      const [lastName, setlastName] = useState();
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [verifyPassword, setverifyPassword] = useState();
      const [loginErrorMessage, setloginErrorMessage] = useState();
      const [registerErrorMessage, setregisterErrorMessage] = useState();
      const [registerForm, setregisterForm] = useState(false);

  

/* Setting the state of the registerForm to false. */

const switchFormType = async (e) => {
  if( registerForm === true){
    setregisterForm(false);
  } else {
    setregisterForm(true);
  }

}

/**
 * It takes the email and password from the form, sends it to the server, and if the server returns a
 * token, it sets the token in the state and clears the error message. If the server returns an error
 * message, it sets the error message in the state.
 * @param e - event
 * @param submissionType - This is the type of submission, in this case, it's a login.
 */
      const handleSubmit = async ( e) => {
          e.preventDefault()
          var token = {};
          switch (registerForm) {
            case false:
            token = await LoginUser({
              email,
              password
                  })
                  if(token.accessToken != null){
                    setToken(token);
                    localStorage.setItem('token',JSON.stringify(token))
                    console.log(token);
                    setloginErrorMessage();
                  } else {
                    setloginErrorMessage(token.message)
              }
              break;
            case true:
          if(verifyPassword === password){
            token = await registerUser({
              email,
              firstName,
              lastName,
              password,
                  }) 
                    localStorage.setItem('token',JSON.stringify(token))
          } else {
            token.message = "Passwords do not Match"
          }

                    if(token.accessToken != null){
                      setToken(token);
                      console.log(token);
                      setregisterErrorMessage();
                    } else {
                      setregisterErrorMessage(token.message)
                }
                break;
            default:
              console.log("No Submission Type Requested.")
              break;
          }
      }


  return(

<div className=" background-image vw-100 vh-100 pt-10 ">
<div className="  h-100 col-auto align-self-center">
    <div className="card bg-transparent flex-row ">
            <div className="col-6 glass align-items-center d-flex justify-content-center "> <h4>Specter CRM</h4></div>
            <div className="col bg-white">  
              
          
                {registerForm ?
                
                <form className="p-5" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal text-center ">Please Register for Account</h1>
                  {registerErrorMessage && <span>Error {registerErrorMessage} </span>}

                <div className="form-floating my-1">
                  <input type="email" className="form-control is-va" required onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating my-1">
                  <input type="text" className="form-control" required onChange={(e)=>setfirstName(e.target.value)} placeholder="Password" autoComplete='On'/>
                  <label htmlFor="floatingPassword">First Name</label>
                </div>

                <div className="form-floating my-1">
                  <input type="text" id='password1' className="form-control" required onChange={(e)=>setlastName(e.target.value)} placeholder="Password" autoComplete='On'/>
                  <label htmlFor="floatingPassword">Last Name</label>
                </div>

                <div className="form-floating my-1">
                  <input type="password" id='password too' className="form-control" required onChange={(e)=>setPassword(e.target.value)} placeholder="Password" autoComplete='On'/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
            
                <div className="form-floating my-1">
                  <input type="password" className="form-control" required onChange={(e)=>setverifyPassword(e.target.value)} placeholder="Password" autoComplete='On'/>
                  <label htmlFor="floatingPassword">Verify Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-success rounded-0" type="submit">Sign up!</button>
                <button type='button' className='w-100 btn btn-secondary muted rounded-0' onClick={switchFormType}> Login</button>

                <p className="mt-5 mb-3 text-center text-muted">© 2017–2022</p>

              </form>
                
                
                : 
                
                
                
                    <form className="p-5" onSubmit={handleSubmit }>
                    <h1 className="h3 mb-3 fw-normal text-center ">Please sign in</h1>
                      {loginErrorMessage && <span>Error {loginErrorMessage} </span>}
                    <div className="form-floating my-1">
                      <input type="email" className="form-control is-va" required onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
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
                    <button className="w-100 btn btn-lg btn-primary rounded-0" type="submit">Sign in</button>
                    <button type="button" className='w-100 btn btn-secondary muted rounded-0' onClick={switchFormType}> Register</button>
                    <p className="mt-5 mb-3 text-center text-muted">© 2017–2022</p>
                    
                  </form>}

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