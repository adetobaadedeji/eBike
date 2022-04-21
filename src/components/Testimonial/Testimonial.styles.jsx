import styled from 'styled-components'
import Dots from '../../assets/Test-Dots.svg'

export const TestWrapper = styled.header`
	width: 100%;
	margin: 80px 0;
`
export const TestContainer = styled.section`
	width: 62%;
	margin: 0 auto;
	min-height: 42.5rem;
	background-color: var(--orange);
	background-image: url(${Dots});
	background-repeat: no-repeat;
	background-position: 82rem -6.5rem;
	background-size: initial;
	border-radius: 1rem;

	padding: 64px 12rem 64px 14rem;
`
export const TestHeader = styled.h4`
	font-weight: 700;
	font-size: 3.6rem;
	line-height: 5.8rem;
	color: var(--white);
	text-align: center;
	margin-bottom: 26px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -1;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 5.8rem;
		height: 0.25rem;
		background-color: var(--white);
	}
`
export const TestContent = styled.section`
	display: flex;
	align-items: center;
	gap: 6rem;
`
export const UserProfile = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const UserImage = styled.img``
export const UserName = styled.p`
	font-weight: 600;
	font-size: 2.2rem;
	line-height: 4.8rem;
	color: var(--white);
`
export const UserTitle = styled.span`
	font-weight: 300;
	font-size: 1.8rem;
	color: rgba(255, 255, 255, 0.85);
`

export const UserComment = styled.section`
	max-width: 40rem;
	display: flex;
	align-items: center;
`
export const Comment = styled.p`
	font-weight: 300;
	font-size: 1.9rem;
	line-height: 3rem;
	letter-spacing: 0.01rem;
	color: rgba(255, 255, 255, 0.9);
`
export const SliderArrowContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 42px;
`
