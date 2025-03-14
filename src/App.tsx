import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "ui";

function App() {
  const [text, setText] = useState("Hello world!");
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
    >
      <Button variant="primary" onClick={() => setText(text + "!")}>{text}</Button>
   
      <Dialog>
    <DialogContent
        headline={<h2>Here is a headline</h2>}
        content={
            <p>
                Here is some content. Here is some content.
                Here is some content. Here is some content.
                Here is some content. Here is some content.
                Here is some content. Here is some content.
            </p>
        }
    />
    <DialogActions>
        <Button
            variant="inverse"
            state="Default"
            size="small"
            label="Cancel"
        />
        <Button
            variant="secondary"
            state="Default"
            size="medium"
            label="Action"
        />
    </DialogActions>
</Dialog>
    </main>
    
  );
}
export default App;
