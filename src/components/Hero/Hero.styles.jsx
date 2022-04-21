import styled from 'styled-components'
import Dots from '../../assets/Dots-Group.svg'

export const HeroWrapper = styled.header`
	width: 100%;
	min-height: 13.1rem;
	background-image: url(${Dots});
	background-repeat: no-repeat;
	background-position: left top;
	background-size: initial;
`
export const HeroContainer = styled.section`
	width: 63%;
	margin: 0 auto;
	display: flex;
	align-items: end;
	gap: 6.6rem;
	justify-content: space-between;
`
export const HeroContent = styled.section`
	width: 100%;
`
export const HeroHeader = styled.h1``
export const HeroDescription = styled.p`
	margin-top: 24px;
	font-weight: 300;
	font-size: 2.1rem;
	line-height: 3.2rem;
	color: var(--gray);
	letter-spacing: 0.05rem;
`
export const HeroSearchForm = styled.form`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	border: 1px solid #c2cfe0;
	border-radius: 10rem;
	margin-top: 56px;
	padding: 8px 8px 8px 48px;

	.search-icon {
		position: absolute;
		left: 2rem;
	}

	input {
		height: 40px;
		width: 75%;
		border: none;
		outline: none;

		font-weight: 400;
		font-size: 1.4rem;
		line-height: 1.8rem;
		letter-spacing: 0.01rem;
	}
	input::placeholder {
		color: #c2cfe0;
	}
	.search-button {
		width: 25%;
		height: 40px;
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 1.8rem;
		letter-spacing: 0.01em;
		border: none;
		font-family: 'Mulish', sans-serif;
	}
`
export const HeroImageContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: end;
`
