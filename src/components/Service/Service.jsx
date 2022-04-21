import React from 'react'
import Lottie from 'react-lottie'
import RiderLottie from '../../lotties/Rider-lottie.json'
import { Footer, ImageContainer, ServiceContainer, Title } from './Service.styles'

const Service = ({ type, price, image, opacity }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: RiderLottie,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	return (
		<ServiceContainer opacity={opacity}>
			<Title>{type}</Title>
			<ImageContainer>
				{image ? (
					<img src={image} alt={type} />
				) : (
					<Lottie options={defaultOptions} height={200} width={200} />
				)}
			</ImageContainer>
			<Footer>
				<div>
					<p>Price</p>
					<span>${price}</span>
				</div>
				<button className='order-button'>Order</button>
			</Footer>
		</ServiceContainer>
	)
}

export default Service
