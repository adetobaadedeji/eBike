import styled from 'styled-components'
import BubbleBg from '../../assets/Bubble-Bg-Left.svg'

export const ServicesWrapper = styled.header`
	width: 100%;
	min-height: 45rem;
	margin-top: 120px;
	background-image: url(${BubbleBg});
	background-repeat: no-repeat;
	background-position: left center;
	background-size: initial;
`
export const ServicesContainer = styled.section`
	width: 63%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	gap: 2.68rem;
`
export const SliderArrowContainer = styled.section`
	width: 63%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 1.6rem;
	margin-top: 2.7rem;

	.arrow-left {
		background-color: #ffe8b9;
		width: 48px;
		height: 48px;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.arrow-right {
		background: linear-gradient(
			180deg,
			rgba(255, 189, 55, 0.58) 0%,
			#ffbd37 100%
		);
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
