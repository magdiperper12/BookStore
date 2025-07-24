'use client';

import React from 'react';
import ParticlesComponent from '../components/tsparticles';

function Collection() {
	return (
		<main className=' pt-32 pb-28  overflow-x-hidden'>
			<ParticlesComponent id='Particles' />
			<div className='h-screen'></div>
		</main>
	);
}

export default Collection;
