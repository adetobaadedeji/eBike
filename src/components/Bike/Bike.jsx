import React from 'react'
import { BikeContainer, BikeContent, BikeName, ImageContainer } from './Bike.styles'

const Bike = ({type, image, colored, opacity}) => {
  return (
		<BikeContainer>
			<BikeContent colored={colored}>
				<ImageContainer opacity={opacity}>
					<img src={image} alt={type} />
				</ImageContainer>
			</BikeContent>
			<BikeName colored={colored}>{type}</BikeName>
		</BikeContainer>
	)
}

export default Bike