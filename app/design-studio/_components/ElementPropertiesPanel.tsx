import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const TextEditor = ({
  initialText,
  xOffset,
  yOffset,
  isFront,
  onUpdate,
  handleCloseEditor,
}) => {
  const [text, setText] = useState(initialText);
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000000");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleUpdateClick = () => {
    onUpdate({ text, fontSize, color });
  };

  return (
    <div className="p-4 bg-white rounded shadow lg:mr-2 bottom-0">
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-bold mb-2">Text Editor</h2>
        <button
          onClick={() => handleCloseEditor()}
          className="bg-neutral text-white p-2 rounded-full hover:bg-neutral-accent transition-colors duration-200 focus:outline-none h-8 w-8"
        >
          <FaTimes />
        </button>
      </div>

      <div className="mb-4">
        <label
          htmlFor="text-input"
          className="block text-sm font-medium text-gray-700"
        >
          Text
        </label>
        <input
          type="text"
          id="text-input"
          value={text}
          onChange={handleTextChange}
          className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="font-size-input"
          className="block text-sm font-medium text-gray-700"
        >
          Font Size
        </label>
        <input
          type="number"
          id="font-size-input"
          value={fontSize}
          onChange={handleFontSizeChange}
          className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="color-input"
          className="block text-sm font-medium text-gray-700"
        >
          Color
        </label>
        <input
          type="color"
          id="color-input"
          value={color}
          onChange={handleColorChange}
          className="w-full mt-1"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="position-select"
          className="block text-sm font-medium text-gray-700"
        >
          Position
        </label>
        <select
          id="position-select"
          value={isFront ? "front" : "back"}
          onChange={(e) => onUpdate({ isFront: e.target.value === "front" })}
          className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="front">Front</option>
          <option value="back">Back</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="x-offset-input"
          className="block text-sm font-medium text-gray-700"
        >
          X Offset
        </label>
        <input
          type="number"
          id="x-offset-input"
          value={xOffset}
          onChange={(e) => onUpdate({ xOffset: parseInt(e.target.value, 10) })}
          className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="y-offset-input"
          className="block text-sm font-medium text-gray-700"
        >
          Y Offset
        </label>
        <input
          type="number"
          id="y-offset-input"
          value={yOffset}
          onChange={(e) => onUpdate({ yOffset: parseInt(e.target.value, 10) })}
          className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleUpdateClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
};

export const ElementPropertiesPanel = ({ handleCloseEditor }) => {
  const handleTextEditorUpdate = (e) => {
    console.log("e", e);
  };
  return (
    <div className="w-full lg:w-64 order-3 absolute lg:relative bottom-0 z-10">
      <TextEditor
        initialText={"test123"}
        onUpdate={handleTextEditorUpdate}
        handleCloseEditor={handleCloseEditor}
      />
    </div>
  );
};
