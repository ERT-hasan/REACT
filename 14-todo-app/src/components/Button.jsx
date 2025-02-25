

const Button = ({btnType, btnText, handler}) => {

  if (btnType === 'success') {
    return <button className="btn btn-success ert-button" onClick={handler}>{btnText}</button>;
  
  } else if (btnType === 'danger') {
    return <button className="btn btn-danger ert-button" onClick={handler}>{btnText}</button>;
  
  } else {
    return <button className="btn btn-primary ert-button" onClick={handler}>{btnText}</button>;
  }
};

export default Button;