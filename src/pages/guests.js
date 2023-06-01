import { Layout, Row, Col, Card, Typography, List } from "antd";
import React from "react";
import sarah from "../pictures/sarah2.jpg";
import kyle from "../pictures/kyle.jpg";
import matthias from "../pictures/matthias.jpg";
import angela from "../pictures/angela.jpeg";
import anya from "../pictures/anya.jpeg";
import aron from "../pictures/aronZ.jpg";
import bridget from "../pictures/bridget.jpeg";
import emerson from "../pictures/emerson.jpeg";
import grandma1 from "../pictures/grandma1.jpeg";
import julie2 from "../pictures/julie2.jpeg";
import paul from "../pictures/paul.jpeg";
import peter from "../pictures/peter.jpeg";
import steven2 from "../pictures/steven2.jpeg";
import mom from "../pictures/mom1.jpg";
import matt from "../pictures/matt2.jpg";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 6,
  1100: 5,
  700: 3,
  500: 2,
};
const guests = [
  {
    image: kyle,
    name: "Kyle Trusler",
    description:
      "Kyle is a dynamic individual with a passion for coding, writing, and exploration. His work is a testament to his diverse interests, showcasing his skills in TypeScript and Svelte, and his thoughtful reflections on life, values, and travel. From Boston to Cape Town, his global adventures have shaped his worldview, enriching his understanding of different cultures. Always committed to self-improvement, Kyle's journey is one of continuous learning and growth, making him a compelling figure in the ever-evolving landscape of technology and personal development. Russell was one of his classmates in college. They were in a few classes together, including a class on parallel processing, and became friends after he and another classmate, Emerson, asked you for help with some classwork. They started spending a lot of time together, studying in various places around campus and hanging out at their dorms and houses. Grace was also part of his college friend group, which included Emerson, Russell, Steve, Julie, and others.",
  },
  {
    image: matthias,
    name: "Matthias Boland",
    description: "Bride Brother",
  },

  {
    image: angela,
    name: "Angela Boland",
    description: "Bride Mom",
  },
  {
    image: anya,
    name: "Mr & Ms Gates",
    description: "Gates parents and treasured friends",
  },
  {
    image: aron,
    name: "Aron Gates",
    description:
      "Aron and Russell don’t know how they first met, other than that they’ve been friends for at least 8 years.",
  },
  {
    image: bridget,
    name: "Bridget Boland",
    description: "",
  },
  {
    image: emerson,
    name: "Emerson Cloud",
    description: "",
  },
  {
    image: grandma1,
    name: "Ms Gates",
    description: "",
  },
  {
    image: julie2,
    name: "Julie Gates",
    description: "",
  },
  {
    image: paul,
    name: "Paul Boland",
    description: "",
  },
  {
    image: peter,
    name: "Peter Gates",
    description: "",
  },
  {
    image: steven2,
    name: "Steven Gates",
    description: "",
  },
  {
    image: sarah,
    name: "Sarah Barksdale",
    description: "",
  },
  {
    image: matt,
    name: "Matt Gates",
    description: "",
  },
  {
    image: mom,
    name: "Linda Ratcliffe",
    description:
      "I met Russell Sept 9, 1996.  I am his mom. The pic illustrates just one of the many special moment we shared together.  I started a relationship with Grace the summer 0f 2015.  I am amazed and proud of how their relationship has blossomed.  This day is blessed for sure.  One that Russell’s dad is watching from heaven with a huge smile on his face. Love ya both!",
  },
  {
    image: "",
    name: "Miranda Boland",
    description: "",
  },
  {
    image: "",
    name: "Sebastian Boland",
    description: "",
  },
  {
    image: "",
    name: "Charlotte Boland",
    description: "",
  },
  {
    image: "",
    name: "Dominic Boland",
    description: "",
  },
  {
    image: "",
    name: "Betsy Galicia",
    description: "",
  },
  {
    image: "",
    name: "Nick A",
    description: "",
  },
  {
    image: "",
    name: "Caitlin Lefebvre",
    description: "",
  },
  {
    image: "",
    name: "Phil Lefebvre",
    description: "",
  },
  {
    image: "",
    name: "Kyle",
    description: "",
  },
  {
    image: "",
    name: "Jack Trusler",
    description: "",
  },
  {
    image: "",
    name: "Sam Swindel",
    description: "",
  },
  // Add more guest objects as needed
];
const { Content } = Layout;
const { Meta } = Card;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Party() {
  return (
    <Layout>
      <Content>
        <div style={{ padding: 24 }}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            style={{ display: "flex", width: "auto" }}
          >
            {shuffleArray(guests).map((guest, index) => (
              <Card
                key={index}
                cover={
                  guest?.image ? (
                    <img alt={guest.name} src={guest.image} />
                  ) : null
                }
                hoverable
                style={{ margin: 12 }}
              >
                <Meta title={guest.name} description={guest.description} />
              </Card>
            ))}
          </Masonry>
        </div>
      </Content>
    </Layout>
  );
}
