import React from 'react';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("button", props, props.text);
};

export { Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
