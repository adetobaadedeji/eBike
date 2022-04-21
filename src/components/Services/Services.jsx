import React from 'react'
import Service from '../Service/Service'
import { ServicesContainer, ServicesWrapper, SliderArrowContainer } from './Services.styles'
import BikeImage1 from '../../assets/Big-Bike1.svg'
import BikeImage2 from '../../assets/Big-Bike2.svg'
import BikeImage3 from '../../assets/Big-Bike1.svg'
import SliderArrowLeft from '../../assets/Left-Arrow.svg'
import SliderArrowRight from '../../assets/Right-Arrow.svg'

const Services = () => {
  const bikekits = [
		{
			id: 1,
			type: 'Universal eBike Kit',
			price: '750.00',
			image: BikeImage1,
		},
		{
			id: 2,
			type: 'Brampoton eBike Kit',
			price: '750.00',
			image: BikeImage2,
		},
		{
			id: 3,
			type: 'Additional eBike Kit',
			price: '250.00',
			image: BikeImage3,
      opacity: "true"
		},
	]
  return (
		<ServicesWrapper>
			<ServicesContainer>
				{bikekits.map((kit) => (
					<Service key={kit.id} {...kit} />
				))}
			</ServicesContainer>
			<SliderArrowContainer>
				<div className='arrow-left'>
					<img src={SliderArrowLeft} alt='Arrow Left' />
				</div>
				<div className='arrow-right'>
					<img src={SliderArrowRight} alt='Arrow Right' />
				</div>
			</SliderArrowContainer>
		</ServicesWrapper>
	)
}

export default Services