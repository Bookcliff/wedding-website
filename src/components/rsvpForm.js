import {
  Button,
  Form,
  Modal,
  Radio,
  Select,
  Typography,
  Divider,
  Drawer,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import ChipotleOrderForm from "./chipotleOrderForm";

const { Title } = Typography;

const { Option } = Select;

export const success = () => {
  Modal.success({
    content: "Response successfully submitted!",
  });
};

const CreateRsvpForm = ({ visible, onCreate, onCancel }) => {
  const [currentGuestList, setCurrentGuestList] = useState([]);
  const [rsvpId, setRsvpId] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [form] = Form.useForm();

  const onClose = () => {
    setDrawerVisible(false);
  };

  const chipotleSuccess = () => {
    Modal.success({
      content: "Order successfully created! RSVP to submit your order.",
    });
  };

  useEffect(() => {
    const getGuestList = async () => {
      console.log("hi");
      const guestList = await fetch("/api/guests/");
      const guests = await guestList.json();
      console.log({ guests });

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

  const getRsvpSubmission = async (values) => {
    const responseStatus = values.modifier;
    const order = values.ChipotleOrder;
    if ((responseStatus === true) | (responseStatus === false)) {
      await fetch(`/api/guests/${rsvpId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ rsvp: responseStatus, order: order }),
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
            getRsvpSubmission(values);
            onCreate(values);
            success();
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
              setDrawerVisible(e.target.value);
            }}
          >
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Divider type="horizontal" />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N25qcmtyZ2RjdWtqb3VtazcxNHJibXYwNjYgYWY3ZmJmYzgyZjljMjY1ZTBhMGQxMDlhZjJmYWU2ZWY2M2Q5NTA5NzgwZmYwMDhiYmNkN2YyOTBkMzRmZGY4NUBn&tmsrc=af7fbfc82f9c265e0a0d109af2fae6ef63d9509780ff008bbcd7f290d34fdf85%40group.calendar.google.com"
        >
          <img
            alt="Google Calendar Link"
            border="0"
            src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"
          />
        </a>
        <Divider type="horizontal" />
        <Drawer
          title="Chipotle Order"
          placement="top"
          onClose={onClose}
          visible={drawerVisible}
        >
          <ChipotleOrderForm />
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={() => {
                onClose();
                chipotleSuccess();
              }}
              type="primary"
            >
              Submit
            </Button>
          </Space>
        </Drawer>
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
        RSVP
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
