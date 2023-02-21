import SideNav from "../sideNav/sideNav";
import topNav from "../topnav/topNav";


export default function Orders (){
    return (
        <>
        <SideNav pageName="Orders" user="test"/>
        <div class="col ">
          <div class="container-fluid mw-3 p-3 glass vh-100 overflow-scroll ">
            <div class="card">
                  <div class="card-body">
                      <h4 class="card-title w-100 d-inline-flex ">Recently Created Orders <div class=" d-inline-flex w-100 justify-content-end"><button type="button" class=" btn btn-success"  data-bs-toggle="modal" data-bs-target="#createOrderModal">Create order</button></div></h4>
                      <div class="table-responsive">
                          <table class="table table-primary">
                              <thead>
                                  <tr>
                                      <th scope="col">Column 1</th>
                                      <th scope="col">Column 2</th>
                                      <th scope="col">Column 3</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr class="">
                                      <td scope="row">R1C1</td>
                                      <td>R1C2</td>
                                      <td>R1C3</td>
                                  </tr>
                                  <tr class="">
                                      <td scope="row">Item</td>
                                      <td>Item</td>
                                      <td>Item</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
              <hr />
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title d-inline-flex justify-content-center w-100">My Stats</h4>
                    
                  <div class="row ">
                        <div class="card col m-1">
                          <div class="card-body">
                            <h4 class="card-title">Contact Methods</h4>
                            <hr /> 
                            <div class="container-fluid">
                              <canvas id="contactMethodsRadarChart"></canvas>
                            </div>
                          </div>
                        </div>
                        <div class="card col m-1">
                          <div class="card-body"> 
                            <h4 class="card-title">Company Revenue Projections</h4>
                            <p class="card-text"> Stacked Bar / line</p>
                          </div>
                        </div>

                    </div>
                  

                    <div class="row ">
                      <div class="card col m-1">
                        <div class="card-body">
                          <h4 class="card-title">Monthly Generated Revenue</h4>
                          <p class="card-text">Stacked Bar/Line</p>
                        </div>
                      </div>
                      <div class="card col m-1">
                        <div class="card-body">
                          <h4 class="card-title">% of unfufilled orders</h4>
                          <p class="card-text">Text</p>
                        </div>
                      </div>
                      <div class="card col m-1">
                        <div class="card-body">
                          <h4 class="card-title">Avg Respone Time</h4>
                          <p class="card-text">Text</p>
                        </div>
                      </div>

                  </div>
                  <div class="row ">
                    <div class="card col m-1">
                      <div class="card-body">
                        <h4 class="card-title">Revenue by Item Category</h4>
                        <p class="card-text">Radar</p>
                      </div>
                    </div>
                    <div class="card col m-1">
                      <div class="card-body">
                        <h4 class="card-title">Deals Closed</h4>
                        <p class="card-text">Bar Graph w/ Projections</p>
                      </div>
                    </div>

                </div>
                </div>
              </div>
          </div>
      </div>
      




{/* mODAL  */}
<div class="modal  fade" id="createOrderModal" tabindex="-1" aria-labelledby="createOrderLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg ">
      <div class="modal-content glass ">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="createOrderModalLabel">Create Order</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row g-3">
              <div class="col form-floating">
                    <input class=" form-control" type="text" id="OrderID"  placeholder="Will Populate on creation" disabled />
                    <label for="OrderID" class="col-sm-2 py-3 col-form-label" > Order Id  </label>
              </div>
  
              <div class="col form-floating ">
                <input class="form-control" list="Users" id="orderCreationUsers" placeholder="Type to search Customers..." />
                <datalist id="orderCreationUsers">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                </datalist>
                <label for="exampleDataList" class="col-sm-2 p-3 col-form-label"> Type to search Customers...</label>
            <br />
              </div>
            </div>
            <div class="row g-3">
              <div class="col form-floating ">
                <input class="form-control" list="Users" id="orderCreationUsers" placeholder="Type to search Customers..." />
                <datalist id="orderCreationUsers">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                </datalist>
                          <label for="exampleDataList" class="col-sm-2 p-3 col-form-label"> Type to search Customers...</label>
                        </div>
                        
                        <div class="col form-floating ">
                        <input class="form-control" list="Users" id="orderCreationUsers" placeholder="Type to search Customers..." disabled />
                        <datalist id="orderCreationUsers">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                          </datalist>
                          <label for="exampleDataList" class="col-sm-2 p-3 col-form-label"> Type to search Sites...</label>
                        </div>
                        
                        <div class="col form-floating">
                          <select class="form-select" id="orderQtySelct" aria-label="Default select example" Disabled>
                  <option selected value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <label for="orderQtySelct" class="col-sm-2 py-3 col-form-label"> Quantity of Items </label>
              </div>
              <button class="btn btn-primary form-control" id="orderAddItemBtn" type="button">Add Item</button>
              
              
            </div>
            <hr />
            <div class="table-responsive">
              <table class="table table-white table-striped">
                <thead>
                  <tr>
                    <th scope="col">Iteam Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Warehouse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td scope="row">R1C1</td>
                    <td>R1C2</td>
                    <td>R1C3</td>
                  </tr>
                  <tr class="">
                    <td scope="row">Item</td>
                    <td>Item</td>
                    <td>Item</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card glass">
              <div class="card-body">
                <h4 class="card-title">Total</h4>
                <p class="card-text">Item Subtotal: <b>$ 123.45</b></p>
                <p class="card-text">Discount: <b>$ 123.45</b></p>
                <p class="card-text">State Tax: <b>$ 123.45</b></p>
                <h1>Total: <i>$ 123.45</i></h1>
  
              </div>
            </div>
  
  
            <div class="modal-footer mt-2">
              <button type="button" type="submit" class="mx-1 btn btn-success">Save changes</button>
              <button type="button" class="mx-1 btn btn-danger">Delete Order</button>
              <button type="button" class="mx-1  btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </form>
      </div>
    </div>
  </div>
</div>

          </>

        
    )
}

