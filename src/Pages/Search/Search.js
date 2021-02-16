import { TextField } from "@material-ui/core";
const Search = () => {
  const [type, setType] = useState(0);

  return (
    <div>
      <TextField
        style={{ flex: 1 }}
        label="Search"
        className="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
