const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get" style ={{margin:"auto",
    width: "60",
    border: "3px solid #73AD21",
    padding: "10px"}} >
        <label htmlFor="header-search">
            <span >Search car</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder=""
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;