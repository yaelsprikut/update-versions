import React from "react";

import "./App.css";
import { useForm } from "react-hook-form";
import {
  getLatestVersion,
  transformDependencies,
  transformDevDependencies,
  returnLatestVersion,
} from "./transform.js";

let renderCount = 0;

function App() {
  const { register, handleSubmit } = useForm();
  renderCount++;

  // parse JSON and return updated package.json (open raw in new tab)
  const handleSubmitInput = (input) => {
    console.log("Handle me and return true or false!");
  };

  // if invalid package.json or other error
  const showMessageError = () => {};

  // if package.json was updated successfully
  const showMessageSuccess = () => {};

  const onSubmit = (data) => {
    const { dependencies } = JSON.parse(data.w3review);
    console.log("Dependencies: ", dependencies);
    console.log(
      "DEV Dependencies: ",
      JSON.parse(data.w3review).devDependencies
    );
    getLatestVersion({ package_name: "fs" });
  };

  return (
    <div className="App">
      <p>Update your package.json libraries!</p>
      <pre>
        <code>
          Paste your <b>package.json</b> below and click update to 🌟
          &nbsp;auto-magically&nbsp; 🌟 update your <b>package.json</b>{" "}
          libraries to their latest version.
        </code>
      </pre>
      <p>
        created by <a href="http://yael.codes">yael.co</a>
      </p>
      <pre>
        <code>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="code-editor"
              id="w3review"
              name="w3review"
              rows="29"
              cols="100"
              ref={register}
            >
              This application is currently under construction. Please standby
              while I bleep bloop this into existence.
            </textarea>
            <br />
            <br />
            <button type="submit">Update</button>
            <br />
            <p>Render counter: {renderCount}</p>
          </form>
        </code>
      </pre>
      <p>*classical music plays in the background*</p>
    </div>
  );
}

export default App;
