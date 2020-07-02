import React from "react";
import { config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox } from "../elements";
import SEO from "../components/SEO";

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO
        title="About"
        desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects."
      />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>Hi. I'm 青lan!</h1>
        <p>
          生长在魔都，离家去国十年，混迹纽约,
          在mbb中的一家工作，运用技术手段帮助500强企业实现战略转型。
        </p>
        <p>
          最近打算开始基于平时做的项目写一些关于数字化转型，企业创投的短文。希望大家能喜欢。
        </p>
        <p>
          I grew up in Shanghai, moved to the US 10 years ago. Currently living
          in New York and working in a consulting firm (one of MBB), I
          specialize in leveraging technology to solve business problems for
          Fortune 500 clients and build disruptive vetures with them and get our
          clients ready for the upcoming challenges in the next 10 years.
        </p>
        <p>
          Recently, I have started a short tech business blog that focuses at
          digital transformation and corp venture building based on the projects
          and cases I have worked on. Hope you like it.
        </p>
      </AnimatedBox>
    </Layout>
  );
};

export default About;
