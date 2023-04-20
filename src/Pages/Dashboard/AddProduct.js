import React from "react";

const AddProduct = () => {
  return (
    <section>
      <h3 className="text-3xl m-3">Add Product</h3>
      <form
        onSubmit=""
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-5/6 m-6 px-5 py-7 shadow-lg"
      >
        <div className="space-y-3">
          {/* name  */}
          <input
            type="text"
            placeholder="Product Title"
            className="input input-bordered w-full"
            required
          />
          {/* product image  */}
          <input
            type="text"
            placeholder="Product image URL"
            className="input input-bordered w-full"
            required
          />
          {/* price */}
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />
          {/* mileage  */}
          <input
            type="number"
            placeholder="ARAI Mileage"
            className="input input-bordered w-full"
            required
          />
          {/* Engine displacement (cc) */}
          <input
            type="number"
            placeholder="Engine Displacement (cc)"
            className="input input-bordered w-full"
            required
          />
          {/* max power  */}
          <input
            type="number"
            placeholder="Max Power (bhp)"
            className="input input-bordered w-full"
            required
          />
          {/* seating capacity  */}
          <input
            type="number"
            placeholder="Seating Capacity"
            className="input input-bordered w-full"
            required
          />
          {/* boot space */}
          <input
            type="number"
            placeholder="Boot Space(Litres)"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="space-y-3">
          {/* fuel type */}
          <input
            type="text"
            placeholder="Fuel Type"
            className="input input-bordered w-full"
            required
          />
          {/* service cost  */}
          <input
            type="number"
            placeholder="Service Cost(Avg. of 5 years)"
            className="input input-bordered w-full"
            required
          />
          {/* cylinder  */}
          <input
            type="number"
            placeholder="No. of cylinder"
            className="input input-bordered w-full"
            required
          />
          {/* transmission  */}
          <input
            type="text"
            placeholder="Transmission Type"
            className="input input-bordered w-full"
            required
          />
          {/* body type */}
          <input
            type="text"
            placeholder="Body Type"
            className="input input-bordered w-full"
            required
          />

          <textarea
            placeholder="Description"
            className="textarea textarea-bordered  textarea-lg  w-full mb-3"
          ></textarea>
          <input type="submit" className="btn btn-primary " value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
