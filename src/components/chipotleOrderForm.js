import { Checkbox, Typography, Divider, Form } from "antd";

const { Title } = Typography;

const chipotleStyleOptions = [
  { label: "Burrito", value: "Burrito" },
  { label: "Bowl", value: "Bowl" },
  { label: "Tacos", value: "Tacos" },
];

const chipotleMeatOptions = [
  { label: "Chicken", value: "Chicken" },
  { label: "Steak", value: "Steak" },
  { label: "Carnitas", value: "Carnitas" },
  { label: "Sofritas", value: "Sofritas" },
  { label: "Veggie", value: "Veggie" },
];

const chipotleToppingsRice = [
  { label: "White Rice", value: "White Rice" },
  { label: "Brown Rice", value: "Brown Rice" },
];

const chipotleToppingsBeans = [
  { label: "Black Beans", value: "Black Beans" },
  { label: "Pinto Beans", value: "Pinto Beans" },
];

const chipotleToppingsSalsa = [
  { label: "Fresh Tomato Salsa", value: "Fresh Tomato Salsa" },
  { label: "Roasted Chili-Corn Salsa", value: "Roasted Chili-corn Salsa" },
  {
    label: "Tomatillo-Green Chili Salsa",
    value: "Tomatillo-Green Chili Salsa",
  },
  { label: "Tomatillo-Red Chili Salsa", value: "Tomatillo-Red Chili Salsa" },
];

const chipotleToppingsOther = [
  { label: "Sour Cream", value: "Sour Cream" },
  { label: "Fajita Veggies", value: "Fajita Veggies" },
  { label: "Cheese", value: "Cheese" },
  { label: "Romaine Lettuce", value: "Romaine Lettuce" },
  { label: "Queso Blanco", value: "Queso Blanco" },
  { label: "Guacamole", value: "Guacamole" },
];

const ChipotleOrderForm = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <>
      <Form.Item
        name="ChipotleOrder"
        label={
          <Title level={5} italic="true">
            Please select your Chipotle order!
          </Title>
        }
      >
        <Checkbox.Group onChange={onChange}>
          <Title level={5} align="center">
            Style
          </Title>
          <Divider type="horizontal" />
          {chipotleStyleOptions?.map((item) => (
            <Checkbox key={item.value} value={item.value}>
              {item?.label}
            </Checkbox>
          ))}
          <Divider type="horizontal" />
          <Title level={5} align="center">
            Meat
          </Title>
          <Divider type="horizontal" />
          {chipotleMeatOptions?.map((item) => (
            <Checkbox key={item.value} value={item.value}>
              {item?.label}
            </Checkbox>
          ))}
          <Divider type="horizontal" />
          <Title level={5} align="center">
            Toppings
          </Title>
          <Divider type="horizontal" />
          {chipotleToppingsRice?.map((item) => (
            <Checkbox key={item.value} value={item.value}>
              {item?.label}
            </Checkbox>
          ))}
          <Divider type="horizontal" />
          {chipotleToppingsBeans?.map((item) => (
            <Checkbox key={item.value} value={item.value}>
              {item?.label}
            </Checkbox>
          ))}
          <Divider type="horizontal" />
          {chipotleToppingsSalsa?.map((item) => (
            <Checkbox
              key={item.value}
              value={item.value}
              style={{ display: "flex", marginLeft: 0 }}
            >
              {item?.label}
            </Checkbox>
          ))}
          <Divider type="horizontal" />
          {chipotleToppingsOther?.map((item) => (
            <Checkbox
              key={item.value}
              value={item.value}
              style={{ display: "flex", marginLeft: 0 }}
            >
              {item?.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </>
  );
};

export default ChipotleOrderForm;
