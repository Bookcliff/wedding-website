import {
  Button,
  Form,
  Modal,
  Radio,
  Select,
  Typography,
  Divider,
  Drawer,
} from "antd";
import { useEffect, useState } from "react";
import ChipotleOrderForm from "./chipotleOrderForm";

const { Title } = Typography;

const { Option } = Select;

const CreateRsvpForm = ({ visible, onCreate, onCancel }) => {
  const [currentGuestList, setCurrentGuestList] = useState([]);
  const [rsvpId, setRsvpId] = useState([]);
  const [responseStatus, setResponseStatus] = useState();
  // const [chipotleOrder, setChipotleOrder] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    const getGuestList = async () => {
      const guestList = await fetch("/api/guests/");

      const guests = await guestList.json();

      // eslint-disable-next-line array-callback-return
      const guestData = guests.data.filter((guest) => {
        if (guest.rsvp === false && guest.rsvpStatus !== true) {
          return guest;
        }
      });

      setCurrentGuestList(guestData);
    };
    getGuestList();
  }, []);

  const getRsvpSubmission = async () => {
    if ((responseStatus === true) | (responseStatus === false)) {
      await fetch(`/api/guests/${rsvpId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ rsvp: responseStatus }),
      });
    }
  };

  return (
    <Modal
      visible={visible}
      title="RSVP Now"
      okText="RSVP"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            getRsvpSubmission();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="name"
          label={<Title level={5}>Name</Title>}
          rules={[
            {
              required: true,
              message: "Please select your name!",
            },
          ]}
        >
          <Select
            placeholder="Select your name."
            allowClear
            showSearch
            optionFilterProp="children"
            filterOption={(inputValue, option) =>
              option.children.toLowerCase().includes(inputValue.toLowerCase())
            }
            onSelect={(value) => setRsvpId(value)}
          >
            {currentGuestList &&
              currentGuestList.map((guest) => (
                <Option key={guest?._id} value={guest?._id}>
                  {guest?.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group
            onChange={(e) => {
              setResponseStatus(e.target.value);
            }}
          >
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Divider type="horizontal" />
        {/* <Drawer
          title="Chipotle Order"
          placement="bottom"
          visible={() => {
            if (responseStatus === true) {
              setDrawerVisible(true);
            }
          }}
        > */}
        <Form.Item
          name="Chipotle Order"
          label={
            <Title level={5} italic="true">
              Please select your Chipotle order!
            </Title>
          }
        >
          <ChipotleOrderForm />
        </Form.Item>
        {/* </Drawer> */}
      </Form>
    </Modal>
  );
};

const RsvpForm = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        size="large"
        style={{ margin: "40px" }}
        onClick={() => {
          setVisible(true);
        }}
      >
        RSVP Now
      </Button>
      <CreateRsvpForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default RsvpForm;
