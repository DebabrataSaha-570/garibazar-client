import React, { useRef } from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const productTitleRef = useRef();
  const productImageRef = useRef();
  const priceRef = useRef();
  const mileageRef = useRef();
  const engineRef = useRef();
  const maxPowerRef = useRef();
  const seatingCapacityRef = useRef();
  const bootSpaceRef = useRef();
  const fuelTypeRef = useRef();
  const serviceCostRef = useRef();
  const cylinderRef = useRef();
  const transmissionTypeRef = useRef();
  const bodyTypeRef = useRef();
  const descriptionRef = useRef();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const productTitleValue = productTitleRef.current.value;
    const productImageValue = productImageRef.current.value;
    const priceValue = priceRef.current.value;
    const mileageValue = mileageRef.current.value;
    const engineValue = engineRef.current.value;
    const maxPowerValue = maxPowerRef.current.value;
    const seatingCapacityValue = seatingCapacityRef.current.value;
    const bootSpaceValue = bootSpaceRef.current.value;
    const fuelTypeValue = fuelTypeRef.current.value;
    const serviceCostValue = serviceCostRef.current.value;
    const cylinderValue = cylinderRef.current.value;
    const transmissionTypeValue = transmissionTypeRef.current.value;
    const bodyTypeValue = bodyTypeRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    const productData = {
      name: productTitleValue,
      image: productImageValue,
      price: priceValue,
      mileage: mileageValue,
      engine: engineValue,
      maxPower: maxPowerValue,
      seatingCapacity: seatingCapacityValue,
      bootSpace: bootSpaceValue,
      fuelType: fuelTypeValue,
      serviceCost: serviceCostValue,
      cylinder: cylinderValue,
      transmissionType: transmissionTypeValue,
      bodyType: bodyTypeValue,
      description: descriptionValue,
    };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added successfully");
          productTitleRef.current.value = "";
          productImageRef.current.value = "";
          priceRef.current.value = "";
          mileageRef.current.value = "";
          engineRef.current.value = "";
          maxPowerRef.current.value = "";
          seatingCapacityRef.current.value = "";
          bootSpaceRef.current.value = "";
          fuelTypeRef.current.value = "";
          serviceCostRef.current.value = "";
          cylinderRef.current.value = "";
          transmissionTypeRef.current.value = "";
          bodyTypeRef.current.value = "";
          descriptionRef.current.value = "";
        }
      });
  };

  return (
    <section>
      <h3 className="text-3xl m-3">Add Product</h3>
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-5/6 m-6 px-5 py-7 shadow-lg"
      >
        <div className="space-y-3">
          {/* name  */}
          <input
            ref={productTitleRef}
            type="text"
            placeholder="Product Title"
            className="input input-bordered w-full"
            required
          />
          {/* product image  */}
          <input
            ref={productImageRef}
            type="text"
            placeholder="Product image URL"
            className="input input-bordered w-full"
            required
          />
          {/* price */}
          <input
            ref={priceRef}
            type="text"
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />
          {/* mileage  */}
          <input
            ref={mileageRef}
            type="text"
            placeholder="ARAI Mileage"
            className="input input-bordered w-full"
            required
          />
          {/* Engine displacement (cc) */}
          <input
            ref={engineRef}
            type="number"
            placeholder="Engine Displacement (cc)"
            className="input input-bordered w-full"
            required
          />
          {/* max power  */}
          <input
            ref={maxPowerRef}
            type="text"
            placeholder="Max Power (bhp)"
            className="input input-bordered w-full"
            required
          />
          {/* seating capacity  */}
          <input
            ref={seatingCapacityRef}
            type="number"
            placeholder="Seating Capacity"
            className="input input-bordered w-full"
            required
          />
          {/* boot space */}
          <input
            ref={bootSpaceRef}
            type="number"
            placeholder="Boot Space(Litres)"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="space-y-3">
          {/* fuel type */}
          <input
            ref={fuelTypeRef}
            type="text"
            placeholder="Fuel Type"
            className="input input-bordered w-full"
            required
          />
          {/* service cost  */}
          <input
            ref={serviceCostRef}
            type="number"
            placeholder="Service Cost(Avg. of 5 years)"
            className="input input-bordered w-full"
            required
          />
          {/* cylinder  */}
          <input
            ref={cylinderRef}
            type="number"
            placeholder="No. of cylinder"
            className="input input-bordered w-full"
            required
          />
          {/* transmission  */}
          <input
            ref={transmissionTypeRef}
            type="text"
            placeholder="Transmission Type"
            className="input input-bordered w-full"
            required
          />
          {/* body type */}
          <input
            ref={bodyTypeRef}
            type="text"
            placeholder="Body Type"
            className="input input-bordered w-full"
            required
          />

          <textarea
            ref={descriptionRef}
            placeholder="Description"
            className="textarea textarea-bordered  textarea-lg  w-full mb-3"
          ></textarea>
          <input
            type="submit"
            className="btn btn-primary "
            value="Add Product"
          />
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
