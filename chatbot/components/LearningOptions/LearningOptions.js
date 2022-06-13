import React from "react";

import styles from "./LearningOptions.module.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Services",
      handler: props.actionProvider.handleServicesList,
      id: 1,
    },
    { text: "Societies", handler: props.actionProvider.societies, id: 2 },
    { text: "Membership price", handler: props.actionProvider.price, id: 3 },
    { text: "How do I become a member", handler: props.actionProvider.becomeMember, id: 4 },
    { text: "Social media handles", handler: props.actionProvider.social, id: 5 },
    { text: "Benefits", handler: props.actionProvider.benefits, id: 6 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className={styles.learning_option_button}
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <div className={styles.learning_options_container}>{optionsMarkup}</div>
  );
};

export default LearningOptions;
