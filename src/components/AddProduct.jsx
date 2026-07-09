import React from 'react'
import NavigationBar from './NavigationBar'

const AddProduct = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Product Code</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Product Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Category</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Brand</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Price</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Discount %</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Stock Quantity</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Description</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Product Image URL</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Rating</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <br />
                <button className="btn btn-primary">Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct