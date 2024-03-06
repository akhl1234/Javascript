let User = {
  Size: "XL",
  Gender: "Male",
  Product: "T-Shirt",
};

function useraccess(Any_objects) {
  console.log(
    `The size of User is ${Any_objects.Size} and the product is ${Any_objects.Product} !`
  );
}
useraccess(User);

// we can also make the price and etc and after print---
useraccess({
  Size: "L",
  Gender: "Males",
});
