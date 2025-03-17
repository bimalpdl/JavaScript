const Search = () => {
    const search = formData => {
          const query = formData.get('prasna');
          query == false ? alert(`Empty search not allowed`) :
          alert(`You searched for ${query}`);
        
    }
  return (
    <form action={search} style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="prasna">Prasna Hana
          <input  name="prasna" id="prasna" autoComplete="off" />
        </label>
        <button value="submit">Khoja</button>
    </form>
  )
}

export default Search;
