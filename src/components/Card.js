import React from 'react';

const Card = (props) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}$?bgset=bg1`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
		);
}

export default Card;

// tc - text center
// br4 - border
// pa1 - padding
// ma2 - margin
// grow - animation
// h2 (name)jane doe will change to {props.name.email.etc}
// props - properties
// {`url`} - template string 