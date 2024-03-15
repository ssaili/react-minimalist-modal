# react-minimalist-modal

Simple and minimalist modal component for React applications.

## Installation

You can install the `react-minimalist-modal` package via npm:

```bash
npm install react-minimalist-modal
```

## Usage

```js
import React, { useState } from "react";
import Modal from "react-minimalist-modal";
import "{your-path}/node_modules/react-minimalist-modal/dist/style.css";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        modalWidth={"300px"}
        modalBackgroundColor={"white"}
        modalBorderColor={"black"}
        modalTitle={"Modal Title"}
        modalTitleColor={"black"}
        modalTitleFont={"Times New Roman"}
        modalTitleFontSize={"30px"}
        modalTitleFontWeight={"normal"}
        closeButtonColor={"black"}
        closeButtonSize={"30px"}
        lineColor={"grey"}
      >
        <div>Modal content</div>
      </Modal>
    </div>
  );
};

export default MyComponent;
```

## Props

| Prop                 | Type     | Required | Description                                   |
| -------------------- | -------- | -------- | --------------------------------------------- |
| isOpen               | boolean  | Yes      | Controls whether the modal is open or closed. |
| onClose              | function | Yes      | Callback function to close the modal.         |
| modalTitle           | string   | Yes      | Title of the modal.                           |
| modalWidth           | string   | No       | Width of the modal.                           |
| modalBackgroundColor | string   | No       | Background color of the modal.                |
| modalBorderColor     | string   | No       | Border color of the modal.                    |
| modalTitleColor      | string   | No       | Color of the modal title.                     |
| modalTitleFontSize   | string   | No       | Font size of the modal title.                 |
| modalTitleFontWeight | string   | No       | Font weight of the modal title.               |
| modalTitleFont       | string   | No       | Font family of the modal title.               |
| closeButtonColor     | string   | No       | Color of the close button.                    |
| closeButtonSize      | string   | No       | Font size of the close button.                |
| lineColor            | string   | No       | Color of the line in the modal header.        |

## License

This project is licensed under the MIT License.
