import { useState } from "react";
import HelpArea from "./HelpArea";

function MainContent() {
  const [helpAreaVisible, setHelpAreaVisible] = useState(false);

  const handleToggleHelpArea = () => {
    setHelpAreaVisible((isVisible) => !isVisible);
  };

  return (
    <main>
      <button onClick={handleToggleHelpArea}>
        {helpAreaVisible ? "Hide" : "Show"}
      </button>
      {helpAreaVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
