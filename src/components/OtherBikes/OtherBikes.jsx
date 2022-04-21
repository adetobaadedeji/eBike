import React from 'react'
import {
	OtherContent,
	OthersContainer,
	OthersHeader,
	OthersWrapper,
} from './OtherBikes.styles'
import BikeImage from '../../assets/Bike-1.svg'
import Bike from '../Bike/Bike'

const OtherBikes = () => {
	const bikes = [
		{
			id: 1,
			type: 'Hybrid Bikes',
			image: BikeImage,
			colored: true,
		},
		{
			id: 2,
			type: 'Fixie Bikes',
			image: BikeImage,
		},
		{
			id: 3,
			type: 'Folding Bikes',
			image: BikeImage,
		},
		{
			id: 4,
			type: 'Mount Bikes',
			image: BikeImage,
		},
		{
			id: 5,
			type: 'City Bikes',
			image: BikeImage,
      opacity: "true"
		},
	]
	return (
		<OthersWrapper>
			<OthersContainer>
				<OthersHeader>Other Type Of Bikes</OthersHeader>
				<OtherContent>
          {bikes.map(bike => (
            <Bike key={bike.id} {...bike} />
          ))}
        </OtherContent>
			</OthersContainer>
		</OthersWrapper>
	)
}

export default OtherBikes
