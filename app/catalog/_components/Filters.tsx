interface FiltersProps {
  filters: Filter[];
  selectedFilters: { [key: string]: string[] };
  handleFilterSelect: (filterType: string, filterValue: string) => void;
  handleFilterDeselect: (filterType: string, filterValue: string) => void;
  handleClearFilters: () => void;
}

export function Filters({
  filters,
  selectedFilters,
  handleFilterSelect,
  handleFilterDeselect,
  handleClearFilters,
}: FiltersProps) {
  // Calculate the count of applied filters
  const appliedFiltersCount = Object.values(selectedFilters).reduce(
    (count, options) => count + options.length,
    0
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Filters {appliedFiltersCount > 0 && `(${appliedFiltersCount})`}
        </h2>
        {appliedFiltersCount > 0 && (
          <button
            className="text-gray-500 hover:text-gray-700 font-medium"
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        )}
      </div>
      {filters.map((filter, idx) => (
        <div key={filter.type} className="mt-4">
          {idx !== 0 && <hr className="h-px my-4 bg-gray-200 border-0" />}
          <details open>
            <summary className="text-gray-700 font-semibold mb-2 cursor-pointer">
              {filter.title}
            </summary>
            <div className="pl-4">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-cyan-600 h-4 w-4"
                    checked={selectedFilters[filter.type].includes(option)}
                    onChange={() =>
                      selectedFilters[filter.type].includes(option)
                        ? handleFilterDeselect(filter.type, option)
                        : handleFilterSelect(filter.type, option)
                    }
                  />
                  <span className="ml-2 pl-1 text-gray-900">{option}</span>
                </label>
              ))}
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
