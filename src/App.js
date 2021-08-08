import AllProductsPage from "./components/AllProductsPage";
const App = () => {
  const data = [
    {
      ID: "1",
      ProductName: "Moto G5",
      Quantity: "2",
      Price: "Rs. 13000",
    },
    {
      ID: "2",
      ProductName: "Racold Geyser",
      Quantity: "3",
      Price: "Rs. 6000",
    },
    {
      ID: "3",
      ProductName: "Dell Inspiron",
      Quantity: "4",
      Price: "Rs. 50000",
    },
  ];

  return (
    <div>
      <AllProductsPage items={data} />
    </div>
  );
};

export default App;
