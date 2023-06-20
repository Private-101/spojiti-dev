import * as React from "react";

interface ActionButtonProps {
  onClick: (ev: React.MouseEvent) => void;
  onCancel: (ev: React.MouseEvent) => void;
}
export const ActionButtons = ({ onClick, onCancel }: ActionButtonProps) => {
  return (
    <>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={ev => onCancel(ev)}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={ev => onClick(ev)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </>
  );
};
