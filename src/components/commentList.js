import { Card, List } from "antd";
import { useEffect, useState } from "react";

// const comments = [
//   { name: "sdfs", comment: "sdfsd" },
//   { name: "sdfdsf", comment: "sdfsdf" },
// ];

export const CommentSection = () => {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getComments = async () => {
      const commentList = await fetch("/api/comments/");
      console.log({ commentList });

      const comments = await commentList.json();

      setLoading(false);

      setComments(comments.data);
    };

    getComments();
  }, []);

  return (
    <Card title="Messages" style={{ textAlign: "center" }}>
      <List
        style={{ textAlign: "left" }}
        loading={loading}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.comment} description={item.name} />
          </List.Item>
        )}
      />
    </Card>
  );
};
