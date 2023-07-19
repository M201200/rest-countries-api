const Navigation = () => {
    return (
        <nav className="navigation">
            <input type="text" placeholder="Search for a country" />
            <div className="region-select">
                <label htmlFor="regions">Filter by Region</label>
            <select name="regions" id="regions">
                <option value="" disabled={false}>All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>    
            </div>
            
        </nav>
        
    )
}

export default Navigation