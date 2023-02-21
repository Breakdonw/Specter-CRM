import React from 'react';

export default function Login() {
  return(
<>
<div class=" container h-100 col-auto align-self-center  " style="margin-top:15rem">
    <div class="card bg-transparent flex-row ">
            <div class="col-6 glass align-items-center d-flex justify-content-center "> <h4>Specter CRM</h4></div>


            <div class="col bg-white">  
                <form class="p-5">
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                
                    <div class="form-floating">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                      <label for="floatingPassword">Password</label>
                    </div>
                
                    <div class="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                      </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
                  </form>
            </div>
    </div>
</div>
</>
  )
}