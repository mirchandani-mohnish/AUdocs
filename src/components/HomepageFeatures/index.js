import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "All Resources - Single Place",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Find Everything starting from exam papers to guides and resources.</>
    ),
  },
  {
    title: "Contribute your own resources",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Completely open source, AUdocs can be modulated by you too.</>
    ),
  },
  {
    title: "Work in Markdown",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Simple Markdown format so anyone can contribute.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
