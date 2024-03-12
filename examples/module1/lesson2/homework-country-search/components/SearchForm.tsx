type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <label className="flex flex-col">
        Name
        <input
          className="border h-7 mt-1 indent-2"
          type="text"
          placeholder="Country..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="flex flex-col">
        Sort by
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border h-7 mt-1"
        >
          <option value="">Initial</option>
          <option value="name">Name</option>
          <option value="population">Population</option>
        </select>
      </label>
    </form>
  );
}

export default SearchForm;
