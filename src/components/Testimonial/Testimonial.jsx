import React from 'react'
import Image from '../../assets/UserImage.svg'
import { ReactComponent as SLiderArrow } from '../../assets/Slider-Arrow.svg'
import {
	Comment,
	SliderArrowContainer,
	TestContainer,
	TestContent,
	TestHeader,
	TestWrapper,
	UserComment,
	UserImage,
	UserName,
	UserProfile,
	UserTitle,
} from './Testimonial.styles'

const Testimonial = () => {
	return (
		<TestWrapper>
			<TestContainer>
				<TestHeader>What our customer are saying</TestHeader>
				<TestContent>
					<UserProfile>
						<UserImage src={Image} alt='User Image' />
						<UserName>Edward Newgate</UserName>
						<UserTitle>Pro-Cycler</UserTitle>
					</UserProfile>
					<UserComment>
						<Comment>
							Dummy Text patient engagement app and web portal allow you to
							access information instantaneously (no tedeous form, long calls,
							or administrative hassle) and securely”
						</Comment>
					</UserComment>
				</TestContent>
			</TestContainer>
			<SliderArrowContainer>
        <SLiderArrow />
      </SliderArrowContainer>
		</TestWrapper>
	)
}

export default Testimonial
