const setDataToLocalDb = (props) => {
  const { shoe } = props;
  const id = shoe.id;

  let localdbObject = {};
  const localValue = localStorage.getItem("shopping_cart");
  if (localValue) {
    localdbObject = JSON.parse(localValue);
  }

  const quantity = localdbObject[id];
  if (quantity) {
    localdbObject[id] = quantity + 1;
  } else {
    localdbObject[id] = 1;
  }
  localStorage.setItem("shopping_cart", JSON.stringify(localdbObject));

  OrderSummaryProduct(shoe);
};

const OrderSummaryProduct = (shoe) => {
  console.log(shoe.id);
  const value = localStorage.getItem("shopping_cart");
  const parsity = JSON.parse(value);

  for (let keys in parsity) {
    console.log(keys === shoe.id);

    if(keys === shoe.id){
      
    }
  }
  // console.log(JSON.parse(value));
};

export default setDataToLocalDb;
