// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }

    else if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("cost")) {
      this.actionProvider.price();
    }

    else if (lowerCaseMessage.includes("services")) {
      this.actionProvider.handleServicesList();
    }

    else if (lowerCaseMessage.includes("societies") || lowerCaseMessage.includes("society") || lowerCaseMessage.includes("chapters")) {
      this.actionProvider.societies();
    }

    else if (lowerCaseMessage.includes("social") || lowerCaseMessage.includes("media")) {
      this.actionProvider.social();
    }

    else if (lowerCaseMessage.includes("benefits") || lowerCaseMessage.includes("advantages")) {
      this.actionProvider.benefits();
    }

    else {
      this.actionProvider.handleUnknown()
    }
  }
}

export default MessageParser;
