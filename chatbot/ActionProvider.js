class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  price() {
    const greetingMessage = this.createChatBotMessage("You can become a member for just Rs 1300/-");
    this.updateChatbotState(greetingMessage);
  }

  handleServicesList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources:",
      {
        widget: "Services",
      }
    );

    this.updateChatbotState(message);
  };

  societies = () => {
    const message = this.createChatBotMessage(
      "Here are all the societies in IEEE NSAKCET, click on the society to navigate to dedicated page of the society",
      {
        widget: "Societies",
      }
    );

    this.updateChatbotState(message);
  }

  becomeMember = () => {
    const message = this.createChatBotMessage(
      "Great that you have asked! Just follow this link and fill out the form. Our team will reach out to you",
      {
        widget: "BecomeMember",
      }
    );

    this.updateChatbotState(message);
  }

  price = () => {
    const message = this.createChatBotMessage(
      "You can become an IEEE member for just Rs 1000",
      {
        widget: "price",
      }
    );

    this.updateChatbotState(message);
  }

  social = () => {
    const message = this.createChatBotMessage(
      "You can follow us at",
      {
        widget: "Social",
      }
    );

    this.updateChatbotState(message);
  }

  benefits = () => {
    const message = this.createChatBotMessage(
      "Head over to Join us page to know all the benefits or head over to IEEE benefits page to get details",
      {
        widget: "benefits",
      }
    );

    this.updateChatbotState(message);
  }

  handleUnknown() {
    const greetingMessage = this.createChatBotMessage("The term is unrecognised, Please select one of the below to know about", {
      widget: "learningOptions"
    });
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
