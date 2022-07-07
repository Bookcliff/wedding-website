import { Checkbox, Typography, Divider } from "antd";

const { Title } = Typography;

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

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
];

const ChipotleOrderForm = () => (
  <>
    <Checkbox.Group onChange={onChange}>
      <Title level={5} align="center">
        Style
      </Title>
      <Divider type="horizontal" />
      <Checkbox value={chipotleStyleOptions.value}>
        {chipotleStyleOptions.label}
      </Checkbox>
      <Divider type="horizontal" />
      <Title level={5} align="center">
        Meat
      </Title>
      <Divider type="horizontal" />
      <Checkbox.Group options={chipotleMeatOptions} />
      <Divider type="horizontal" />
      <Title level={5} align="center">
        Toppings
      </Title>
      <Divider type="horizontal" />
      <Checkbox.Group options={chipotleToppingsRice} />
      <Divider type="horizontal" />
      <Checkbox.Group options={chipotleToppingsBeans} />
      <Divider type="horizontal" />
      <Checkbox.Group options={chipotleToppingsSalsa} />
      <Divider type="horizontal" />
      <Checkbox.Group options={chipotleToppingsOther} />
      <Divider type="horizontal" />
    </Checkbox.Group>
  </>
);

export default ChipotleOrderForm;

// import { Checkbox, Col, Row } from "antd";
// import React from "react";

// const onChange = (checkedValues) => {
//   console.log("checked = ", checkedValues);
// };

// const Test = () => (
//   <Checkbox.Group
//     style={{
//       width: "100%",
//     }}
//     onChange={onChange}
//   >
//     <Row>
//       <Col span={8}>
//         <Checkbox value="A">A</Checkbox>
//       </Col>
//       <Col span={8}>
//         <Checkbox value="B">B</Checkbox>
//       </Col>
//       <Col span={8}>
//         <Checkbox value="C">C</Checkbox>
//       </Col>
//       <Col span={8}>
//         <Checkbox value="D">D</Checkbox>
//       </Col>
//       <Col span={8}>
//         <Checkbox value="E">E</Checkbox>
//       </Col>
//     </Row>
//   </Checkbox.Group>
// );

// export default Test;
