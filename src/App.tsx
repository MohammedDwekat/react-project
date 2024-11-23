// import ListGroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import { useState } from "react";

// const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

// const handleSelectItem = (item: string) => {
//   console.log(item);
// };
function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alerts onClose={() => setAlertVisible(false)}>My alert</Alerts>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
      {/* <Alerts>
        Hello <span>World</span>
      </Alerts>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
