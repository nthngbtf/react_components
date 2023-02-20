import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handClick = () => {
    setShowModal(true);
  };

  const handClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onChange={handClose} actionBar={actionBar}>
      <p>Here is the important agreement for your to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consequat vestibulum est. Cras convallis mi ex, quis porta dolor sodales
        ac. In at semper eros. Nullam luctus a lacus a suscipit. Pellentesque
        efficitur purus arcu, eget tincidunt leo vehicula at. Fusce in placerat
        libero, et laoreet tortor. Etiam vel lectus sit amet augue blandit
        tristique. Suspendisse imperdiet sem a turpis efficitur, id placerat
        lectus sollicitudin.
      </p>
    </div>
  );
}

export default ModalPage;
