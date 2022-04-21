import styled from 'styled-components'
import FooterDots from '../../assets/Footer-Dots.svg'

export const FooterWrapper = styled.header`
	width: 100%;
	margin-top: 80px;
	background-color: var(--orange);
	background-image: url(${FooterDots});
	background-repeat: no-repeat;
	background-position: left bottom;
	background-size: initial;
`

export const FooterContainer = styled.section`
	width: 63%;
	margin: 0 auto;
	min-height: 42.5rem;
	display: flex;
	align-items: center;
	gap: 16.6rem;
`
export const LeftContent = styled.section`
	max-width: 39.1rem;
`
export const LogoContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: start;

	.BLogo {
		background-color: var(--white);
		width: 41px;
		height: 41px;
		margin-right: 12px;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
export const Description = styled.p`
	font-weight: 300;
	font-size: 1.8rem;
	line-height: 2.8rem;
	color: var(--white);
	margin: 17px 0 31px;
	letter-spacing: 0.01rem;
`
export const Copyright = styled.p`
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 2.8rem;
	color: var(--white);
`

export const RightContent = styled.section`
	display: flex;
	align-items: center;
	gap: 6.3rem;

	ul {
		list-style: none;
	}

	ul li {
		font-weight: 300;
		font-size: 1.8rem;
		line-height: 3.8rem;
		color: var(--white);
	}

	ul li:first-child {
		font-weight: 700;
		font-size: 2rem;
		line-height: 6rem;
	}
`
export const MenuLists = styled.section``
export const Others = styled.section``
