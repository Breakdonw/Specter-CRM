import TopNav from "../topnav/topNav";
import SideNav from "../sideNav/sideNav";
import { Fragment,useEffect } from "react";

async function verifyToken(Token) {
return fetch('http://localhost:8080/api/access/user',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': Token.accessToken
          },
          body: JSON.parse(sessionStorage.getItem('token'))
      }).then(Response);
 
 
}


export default function Dashboard () {

const checkAccess = async (e) =>{
    if (verifyToken(JSON.parse(sessionStorage.getItem('token'))) != 200 ){

        sessionStorage.removeItem('token');
        console.log("Session Token Invalid, Please relogin");
    } else {
        console.log("Session Token Verified succesfully");
    }


}

useEffect(() => {
    checkAccess();
  }, []
  )

    return (
        
        < >
        {/* <TopNav /> */}
        <SideNav pageName="Dashboard" />
        <div className="col ">
            <div className="container-fluid mw-3 p-3 glass vh-100 overflow-scroll ">
                <div>
                    <div className="card w-100 h-100 p-5">
                        <canvas id="contactMethodsRadarChart"></canvas>

                    </div>
                </div>
                <hr />
                <div className=" row  ">

                    <div className="col">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h4 className="card-title">Top Sales</h4>
                                <div className="table-responsive">
                                    <table className="table table-light">
                                        <thead>
                                            <tr>
                                                <th scope="col">Employee Name</th>
                                                <th scope="col">Total Amount</th>
                                                <th scope="col">Highest Sale</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td scope="row">R1C1</td>
                                                <td>R1C2</td>
                                                <td>R1C3</td>
                                            </tr>
                                            <tr className="">
                                                <td scope="row">Item</td>
                                                <td>Item</td>
                                                <td>Item</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h4 className="card-title">Recent Sales</h4>


                                <div className="table-responsive">
                                    <table className="table  table-light">
                                        <thead>
                                            <tr>
                                                <th scope="col">Employee Name</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td scope="row">R1C1</td>
                                                <td>R1C2</td>
                                                <td>R1C3</td>
                                            </tr>
                                            <tr className="">
                                                <td scope="row">Item</td>
                                                <td>Item</td>
                                                <td>Item</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div></>   
)
}

