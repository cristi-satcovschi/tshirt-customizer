import { useState } from "react";

import elements from "./_elements.json";

const ItemList = ({ handleClickElement }) => {
  const [items, setItems] = useState(elements);
  const [selectedType, setSelectedType] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [imageInput, setImageInput] = useState(null);

  const handleAddItemClick = () => {
    if (selectedType === "text") {
      setItems([...items, { type: "text", content: textInput }]);
    } else if (selectedType === "image") {
      setItems([...items, { type: "image", content: imageInput }]);
    }

    setSelectedType(null);
    setTextInput("");
    setImageInput(null);
  };

  return (
    // The maxHeight style is set to calc(100vh - 8rem) to limit the maximum height of the element list and provide a scrollable area when the list exceeds the available vertical space.
    <div
      className="p-4 bg-white rounded shadow lg:ml-2 flex flex-col"
      style={{ maxHeight: "calc(100vh - 8rem)" }}
    >
      <details open>
        <summary className="text-xl font-bold cursor-pointer lg:hidden">
          T-Shirt Elements
        </summary>
        <h2 className="text-xl font-bold hidden lg:block">T-Shirt Elements</h2>

        <div className="mt-2 max-h-full overflow-y-scroll p-2 rounded bg-neutral-300 flex flex-col space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded bg-white border border-gray-300 cursor-pointer hover:bg-neutral-200"
              onClick={() => handleClickElement()}
            >
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-gray-400" />
                <p className="text-sm font-medium">{item.type}</p>
              </div>
              {item.type === "text" && (
                <p className="text-sm">{item.content}</p>
              )}
              {item.type === "image" && (
                <img
                  src={item.content}
                  alt="Image"
                  className="w-8 h-8 rounded object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {selectedType && (
          <div className="my-2">
            {selectedType === "text" && (
              <input
                type="text"
                placeholder="Enter text..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="border border-gray-300 p-2 mr-2"
              />
            )}
            {selectedType === "image" && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImageInput(URL.createObjectURL(e.target.files[0]))
                }
                className="mr-2"
              />
            )}
            <button
              onClick={handleAddItemClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        )}

        {!selectedType && (
          <div className="mt-2">
            <button
              onClick={() => setSelectedType("text")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
            >
              Add Text
            </button>
            <button
              onClick={() => setSelectedType("image")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
            >
              Add Image
            </button>
          </div>
        )}
      </details>
    </div>
  );
};

export const ElementsListPanel = ({ handleClickElement }) => {
  const handleAddElement = () => {};

  return (
    <div className="w-full lg:w-64 order-2 lg:order-1 absolute lg:relative bottom-0 z-10">
      <ItemList handleClickElement={handleClickElement} />
    </div>
  );
};
