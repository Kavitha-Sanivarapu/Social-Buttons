const Button = (props) => {
  //  Write your code here.
  {className, buttonText} = props;
  return (<button className={`button ${className}`}>{buttonText}</button>);
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div class="buttons-container">
      <Button className="button-orange" buttonText="Like" />
      <Button className="button-white" buttonText="Comment" />
      <Button className="button-blue" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
