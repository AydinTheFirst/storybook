import { ListGroup, ListGroupItemProps, ListGroupProps } from "flowbite-react";

export const List: React.FC<{
  list: ListGroupProps;
  item: ListGroupItemProps;
}> = (props) => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <>
      <ListGroup {...props.list}>
        {items.map((item, index) => (
          <ListGroup.Item key={index} {...props.item}>
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
