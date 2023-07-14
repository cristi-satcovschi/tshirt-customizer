type DesignStudioButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const DesignStudioButton = ({
  children,
  onClick,
}: DesignStudioButtonProps) => {
  return (
    <button
      className="flex justify-center items-center bg-neutral hover:bg-neutral-accent text-white font-semibold px-4 py-2 rounded-md shadow shadow-neutral-accent text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
