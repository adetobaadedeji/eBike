import styled from 'styled-components'

export const ServiceWrapper = styled.header`
	width: 100%;
`
export const ServiceContainer = styled.section`
	min-width: 40rem;
	min-height: 38rem;
	padding: 24px 2.4rem;
	text-align: left;
	background-color: var(--white);
	box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
	border-radius: 2rem;
	opacity: ${({ opacity }) => (opacity ? '0.5' : '1')};
`

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	border-bottom: 1px solid #c2cfe0;
	transform: matrix(1, 0, 0, 1, 0, 0);
	min-height: 23rem;
	margin-bottom: 15px;
`

export const Title = styled.p`
	font-weight: 700;
	font-size: 2rem;
	line-height: 2.5rem;
	color: var(--black-bike);
`
export const Footer = styled.section`
	padding-left: 0.7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 2rem;
		color: var(--gray);
		margin-bottom: 12px;
	}

	span {
		font-weight: 700;
		font-size: 2rem;
		line-height: 2.5rem;
		color: var(--black_bike);
	}

	.order-button {
		width: 25%;
		height: 40px;
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 1.8rem;
		letter-spacing: 0.01em;
		border: none;
		font-family: 'Mulish', sans-serif;
		color: var(--black_bike);
	}
`
