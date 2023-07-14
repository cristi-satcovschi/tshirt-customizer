import { DesignStudioButton } from "./DesignStudioButton";
import { FaUndo, FaRedo, FaSave, FaShoppingCart } from "react-icons/fa";

export const ToolbarPanel = () => {
  const handleUndo = () => {
    // Handle undo logic
  };

  const handleRedo = () => {
    // Handle redo logic
  };

  const handleSave = () => {
    // Handle save logic
  };

  const handleAddToCart = () => {
    // Handle add to cart logic
  };

  return (
    <div className="h-16 flex items-center md:px-4">
      <div className="flex justify-evenly w-full items-center md:space-x-4">
        <div className="mr-4 hidden md:flex items-center">
          <h1 className="font-semibold text-2xl select-none">Deisgn Studio</h1>
        </div>
        <DesignStudioButton onClick={handleUndo}>
          <FaUndo className="mr-2" />
          Undo
        </DesignStudioButton>
        <DesignStudioButton onClick={handleRedo}>
          <FaRedo className="mr-2" />
          Redo
        </DesignStudioButton>

        <div className="flex-grow hidden md:block"></div>

        <DesignStudioButton onClick={handleSave}>
          <FaSave className="mr-2" />
          Save
        </DesignStudioButton>
        <DesignStudioButton onClick={handleAddToCart}>
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </DesignStudioButton>
      </div>
    </div>
  );
};
