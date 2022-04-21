import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/Search-Icon.svg'
import Lottie from 'react-lottie'
import HeaderLottie from '../../lotties/Header-lottie.json'

import {
	HeroContainer,
	HeroContent,
	HeroDescription,
	HeroHeader,
	HeroImageContainer,
	HeroSearchForm,
	HeroWrapper,
} from './Hero.styles'

const Hero = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: HeaderLottie,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	return (
		<HeroWrapper>
			<HeroContainer>
				<HeroContent>
					<HeroHeader>
						Your Bike <br /> Electric Update
					</HeroHeader>
					<HeroDescription>
						Dummy text progressive, and affordable healthcare, accessible on
						mobile and online for everyone
					</HeroDescription>
					<HeroSearchForm>
						<SearchIcon className='search-icon' />
						<input type='text' placeholder='Search Bike or anything' />
						<button className='search-button' type='submit'>
							Find
						</button>
					</HeroSearchForm>
				</HeroContent>
				<HeroImageContainer>
					<Lottie options={defaultOptions}  />
				</HeroImageContainer>
			</HeroContainer>
		</HeroWrapper>
	)
}

export default Hero
