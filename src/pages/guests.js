import { Layout, Row, Col, Card, Typography, List } from "antd";
import React from "react";
import sarah from "../pictures/sarah2.jpg";
import matthias from "../pictures/m1.jpeg";
import anya from "../pictures/anya.jpeg";
import aron from "../pictures/aronZ.jpg";
import bridget from "../pictures/bridget.jpeg";
import emerson from "../pictures/emerson.jpg";
import grandma1 from "../pictures/grandma1.jpeg";
import julie2 from "../pictures/julie2.jpeg";
// import paul from "../pictures/paul.jpeg";
import peter from "../pictures/peter.jpeg";
import steven2 from "../pictures/steven2.jpeg";
import mom from "../pictures/mom1.jpg";
import matt from "../pictures/matt2.jpg";
import kyle from "../pictures/kyle1.jpg";
import Betsy from "../pictures/betsy1.jpeg";
import charlette from "../pictures/charlette.jpeg";
import as from "../pictures/as.jpeg";
import maranda from "../pictures/maranda.jpeg";
import dominic from "../pictures/dominic.jpeg";
import jack from "../pictures/jack.jpg";
import sam from "../pictures/sam.jpg";

import paulang from "../pictures/paulang.jpg";

import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
const guests = [
  {
    image: kyle,
    name: "Kyle Trusler",
    description:
      "Kyle is a dynamic individual with a passion for coding, writing, and exploration. His work is a testament to his diverse interests, showcasing his skills in TypeScript and Svelte, and his thoughtful reflections on life, values, and travel. From Boston to Cape Town, his global adventures have shaped his worldview, enriching his understanding of different cultures. Always committed to self-improvement, Kyle's journey is one of continuous learning and growth, making him a compelling figure in the ever-evolving landscape of technology and personal development. Russell was one of his classmates in college. They were in a few classes together, including a class on parallel processing, and became friends after he and another classmate, Emerson, asked him for help with some classwork. They started spending a lot of time together, studying in various places around campus and hanging out at their dorms and houses. Grace was also part of his college friend group, which included Emerson, Russell, Steve, Julie, and others.",
  },
  {
    image: matthias,
    name: "Matthias Boland",
    description: "Matthais is Grace's brother.",
  },

  {
    image: anya,
    name: "Csilla & Istvan Gates",
    description: "Gates' parents and treasured friends",
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
    description: "Grace's sister",
  },
  {
    image: emerson,
    name: "Emerson Cloud",
    description:
      "I met Russell when I was posing as a soccer payer with my indoor soccer shoes. I baited him into asking if I played soccer (which I don’t) and reeled him into a long term friendship.  We bonded over studying, pickup sports and seeing what we could get away with in college.",
  },
  {
    image: grandma1,
    name: "Mrs GEczy",
    description: "Gates' family grandma",
  },
  {
    image: julie2,
    name: "Julie Gates",
    description: "Russell's friend",
  },
  {
    image: paulang,
    name: "Paul & Angela Boland",
    description:
      "We're the mother and father of the bride. We first met Russell when he lived with us for a week before moving him and Grace into an apartment for the summer between their freshman and sophomore year at Akron.",
  },
  {
    image: peter,
    name: "Peter Gates",
    description: "Russell's friend",
  },
  {
    image: steven2,
    name: "Steven Gates",
    description: "Russell's friend",
  },
  {
    image: sarah,
    name: "Sarah Barksdale",
    description:
      "Grace and Sarah met in 2018 while attending graduate school in Texas. They quickly bonded over their coursework and started getting lunch together outside of school. They eventually became each other’s constant pillar of support, especially during the struggles of the COVID-19 pandemic, as well as always being there for each other to celebrate huge life milestones!",
  },
  {
    image: matt,
    name: "Matt Gates",
    description: "Russell's friend",
  },
  {
    image: mom,
    name: "Linda Ratcliffe",
    description:
      "I met Russell Sept 9, 1996.  I am his mom. The pic illustrates just one of the many special moment we shared together.  I started a relationship with Grace the summer 0f 2015.  I am amazed and proud of how their relationship has blossomed.  This day is blessed for sure.  One that Russell’s dad is watching from heaven with a huge smile on his face. Love ya both!",
  },
  {
    image: maranda,
    name: "Miranda Boland",
    description: "Grace's sister",
  },
  {
    image: as,
    name: "Sebastian & Alision Boland",
    description: "Grace's brother and sister-in-law",
  },
  {
    image: charlette,
    name: "Charlotte Boland",
    description: "Grace's sister",
  },
  {
    image: dominic,
    name: "Dominic Boland",
    description: "Grace's brother",
  },
  {
    image: Betsy,
    name: "Betsy Galicia",
    description:
      "In 2018, in the most wondrous of times, I was assigned to be Grace’s mentor. At first, I was nervous, as I deemed Grace to be a wise, intelligent, beautiful woman, what could I possibly mentor her in?! But I am so grateful for that pairing because she is indeed all of those things and more. As time progressed, Grace and I grew closer, partly because we have a pent so much time laughing and having fun together. We have also collaborated in many projects together, and she has supported some of my most unhinged ideas. Fast-forward five years of adventures, in Houston, Austin, Chicago, Mexico, and the places that are yet to come…I am beyond honored and blessed to call Grace my best friend.",
  },
  {
    image: "",
    name: "Nick A",
    description: "Grace's friend",
  },
  {
    image: "",
    name: "Caitlin Lefebvre",
    description: "Grace's friend",
  },

  {
    image: "",
    name: "Phil Lefebvre",
    description: "Grace's friend",
  },
  {
    image: "",
    name: "Kyle",
    description: "Grace's friend",
  },
  {
    image: jack,
    name: "Jack Trusler",
    description: "Russell's friend",
  },
  {
    image: sam,
    name: "Sam Swindel",
    description: "Russell's friend",
  },
  // Add more guest objects as needed
];

console.log(guests.length);
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
                    <img
                      alt={guest.name}
                      src={guest.image}
                      style={{ width: "100%", height: "auto" }} // Increase the width as desired
                    />
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
