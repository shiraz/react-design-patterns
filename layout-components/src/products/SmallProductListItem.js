export const SmallProductListItem = ({ product }) => {
  const { name, price } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </>
  );
};
