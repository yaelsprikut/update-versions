import "./App.css";

function App() {
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
          <textarea
            className="code-editor"
            id="w3review"
            name="w3review"
            rows="29"
            cols="100"
          >
            This application is currently under construction. Please standby
            while I bleep bloop this into existence.
          </textarea>
          <br />
          <br />
          <button>Update</button>
          <br />
        </code>
      </pre>
      <p>*classical music plays in the background*</p>
    </div>
  );
}

export default App;
