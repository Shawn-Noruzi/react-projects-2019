const appRoot = document.getElementById(app);

let visibility = false;
const toggle = () => {
  visibility = !visibility;
  renderApp();
};
const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>
        {visibility ? "hide details" : "show details"}
      </button>
      {visibility && <div>some details</div>}
    </div>
  );
  ReactDOM.render(template, app);
};
renderApp();
