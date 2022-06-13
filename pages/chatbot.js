import Chatbot from "react-chatbot-kit";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import styles from "../styles/Chatbot.module.css";
import "react-chatbot-kit/build/main.css";
import { useState } from "react";
import Logo from "../components/logo/Logo"

function CChatbot() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div>
      {showBot && (
        <div className={styles.app_chatbot_container}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button
        className={styles.app_chatbot_button}
        onClick={() => toggleBot((prev) => !prev)}
      >
        <div>Nawab</div>
        <Logo/>
      </button>
    </div>
  );
}

export default CChatbot;
