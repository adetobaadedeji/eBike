import React from 'react'
import Service from '../Service/Service'
import {
	LearnMore,
	TypeContainer,
	TypeContent,
	TypeDescription,
	TypeHeader,
	TypeWrapper,
} from './BikeType.styles'

const BikeType = () => {
	return (
		<TypeWrapper>
			<TypeContainer>
				<Service price='750.00'/>
				<TypeContent>
					<TypeHeader>Hybrid Bikes</TypeHeader>
					<TypeDescription>
						Dummy Text progressive, and affordable healthcare, accessible on
						mobile and online for everyone. To us, it’s not just work. We take
						pride in the solutions we deliver
					</TypeDescription>
					<LearnMore>Learn more</LearnMore>
				</TypeContent>
			</TypeContainer>
		</TypeWrapper>
	)
}

export default BikeType
