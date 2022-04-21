import styled, { css } from 'styled-components'

export const BikeContainer = styled.section``

export const BikeContent = styled.section`
	background: var(--white);
	padding: 15px 3.8rem;
	box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
	border-radius: 1rem;
	${({ colored }) =>
		colored &&
		css`
			border: 2px solid var(--orange);
			color: var(--orange);
			box-shadow: none;
		`}
`

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: ${({ opacity }) => (opacity ? '0.5' : '1')};
`
export const BikeName = styled.p`
	width: 100%;
	text-align: center;
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 20px;
	color: ${({ colored }) => (colored ? 'var(--orange)' : 'var(--black-bike)')};
	margin-top: 16px;
`
