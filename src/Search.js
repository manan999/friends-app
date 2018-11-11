import React from 'react' ;
import './search.css' ;

const Searchbox = ({searchChange}) => {
	return (
		<div className="padded">	
			<input className='searchbox' type='search' placeholder='Search Avengers' onChange={searchChange} /> 
		</div>
		) ;
}

export default Searchbox ;