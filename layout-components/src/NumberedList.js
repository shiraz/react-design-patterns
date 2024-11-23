export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <ol>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3>
          <ItemComponent {...{ [resourceName]: item }} />
        </>
      ))}
    </ol>
  );
};
