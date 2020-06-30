import React from "react";
import { config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox } from "../elements";
import SEO from "../components/SEO";

const Blog = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="Blog | Jodie" />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>
          I am about to start a blog about digital transformation and cooperate
          venture trends. Stay Tuned!!
        </h1>
      </AnimatedBox>
    </Layout>
  );
};

export default Blog;
