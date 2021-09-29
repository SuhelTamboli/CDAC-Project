import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://source.unsplash.com/user/erondu/1600x700",
    altText: "Get Properties In Your Area",
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    header: "Get Properties In Your Area",
    key: "1",
  },

  {
    src: "https://source.unsplash.com/user/erondu/1600x700",
    altText: "Hussel Free Contact With Owner",
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    header: "Hussel Free Contact With Owner",
    key: "2",
  },
  {
    src: "https://source.unsplash.com/user/erondu/1600x700",
    altText: "Why Us ?? ",
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    header: "Why Us ?? ",
    key: "3",
  },
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
