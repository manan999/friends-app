import React from 'react' ;
import './Scroll.css' ;

const Scroll = (props) => {
	return (
		<div class="scrol">
			{props.children}
		</div>
		) ;		 
} ;

export default Scroll ;