

const SearchBox = ({value, onFilter}) => {
    return (
        <>
            <p>Find Contacts by Name</p>
            <input
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)} />
        </>

        
    );
};

export default SearchBox;