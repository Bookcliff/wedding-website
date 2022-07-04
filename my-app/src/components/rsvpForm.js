import { Button, Form, Modal, Radio, Select } from 'antd';
import { useEffect, useState } from 'react';

const { Option } = Select;

const CreateRsvpForm = ({ visible, onCreate, onCancel }) => {
    const [currentGuestList, setCurrentGuestList] = useState([]);
    useEffect(() => {
        const getGuestList = async () => {
            // const guestList = await fetch('/api/index');
            const guestList = await fetch('/api/index/{id}');

            const guests = await guestList.json();
            console.log(guests)
            const guestData = guests.data.map((guest) => {
                if (guest.rsvp === false) {
                    return (guest.name);
                }
            })

            setCurrentGuestList(guestData);

        }
        getGuestList();
    })
    const [form] = Form.useForm();
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
                        // make fetch call here with userId to update and the data in body 
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your name!',
                        },
                    ]}
                >
                    <Select
                        placeholder="Select your name."
                        allowClear
                        showSearch
                        optionFilterProp='children'
                        filterOption={(inputValue, option) => option.children.toLowerCase().includes(inputValue.toLowerCase())}
                    >
                        {currentGuestList && currentGuestList.map(guest => <Option value={guest}>{guest}</Option>)}

                    </Select>
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal >
    );
};

const RsvpForm = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <div>
            <Button
                type="primary"
                size="large"
                style={{ margin: '40px' }}
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