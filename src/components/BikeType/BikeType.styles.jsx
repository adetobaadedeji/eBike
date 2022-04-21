import styled from 'styled-components'
import BubbleBg from '../../assets/Bubble-Bg-Right.svg'

export const TypeWrapper = styled.header`
	width: 100%;
	min-height: 45rem;
	margin-top: 120px;
	background-image: url(${BubbleBg});
	background-repeat: no-repeat;
	background-position: right center;
	background-size: initial;

`
export const TypeContainer = styled.section`
	width: 63%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const TypeContent = styled.section`
	width: 50%;
`
export const TypeHeader = styled.h3``

export const TypeDescription = styled.p`
	font-weight: 300;
	font-size: 1.8rem;
	line-height: 3rem;
	color: var(--gray);
  margin: 32px 0 40px;
`
export const LearnMore = styled.button`
	border: 1.4px solid var(--orange);
	background: var(--white);
	font-family: 'Mulish', sans-serif;
	border-radius: 55px;
	width: 20rem;
	font-weight: 700;
	font-size: 1.8rem;
	line-height: 6rem;
	color: var(--orange);
	transition: var(--transition);

	&:hover {
		background: linear-gradient(
			180deg,
			rgba(255, 189, 55, 0.58) 0%,
			#ffbd37 100%
		);
		color: var(--white);
	}
`
