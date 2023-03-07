import { Button, Form, Input } from "antd";
import { success } from "./rsvpForm";
import { React } from "react";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const CommentSubmission = () => {
  const [form] = Form.useForm();

  const putComment = async (values) => {
    console.log({ values });
    const name = values.name;
    const comment = values.comment;
    await fetch(`/api/comments/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: name, comment: comment }),
    });
  };

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Form
        form={form}
        name="comment"
        labelCol={{
          span: 3,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Message" name="comment">
          <Input />
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  putComment(values);
                  onCreate(values);
                  success();
                })
                .catch((info) => {
                  console.log("Validate Failed:", info);
                });
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
