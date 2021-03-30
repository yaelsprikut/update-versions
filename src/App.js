import React from "react";

import "./App.css";
import { useForm } from "react-hook-form";
const { getLatestVersion } = require("./transform.js");

function App() {
  const { register, handleSubmit, setValue } = useForm();
  // const [inputText, setInputText] = useState("This application is currently under construction. Please standby while I bleep bloop this into existence.");
  // parse JSON and return updated package.json (open raw in new tab)
  // const handleSubmitInput = (input) => {
  //   console.log("Handle me and return true or false!");
  // };

  // if invalid package.json or other error
  // const showMessageError = () => {};

  // if package.json was updated successfully
  // const showMessageSuccess = () => {};

  const onSubmit = (data) => {
    const { dependencies, devDependencies } = JSON.parse(data.w3review);
    const updatedJson = getLatestVersion({
      devDependencies,
      dependencies,
    });

    const inputFieldJson = JSON.parse(data.w3review);

    delete inputFieldJson.dependencies;
    delete inputFieldJson.devDependencies;

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(updatedJson);
      }, 1000);
    });
    myPromise.then((value) => {
      setValue("w3review", JSON.stringify(value, null, 4));
    });
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
              Paste your package.json to get the latest npm packages!
            </textarea>
            <br />
            <br />
            <button type="submit">Update</button>
            <br />
          </form>
        </code>
      </pre>
      <p>*classical music plays in the background*</p>
    </div>
  );
}

export default App;
