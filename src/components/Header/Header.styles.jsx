import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.section`
	width: 100%;
`
export const HeaderContainer = styled.section`
	width: 63%;
	margin: 56px auto 38px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const LogoContainer = styled.section``
export const MenuContainer = styled.section``
export const MenuLink = styled.a`
	text-decoration: none;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 2.3rem;
	letter-spacing: 0.01rem;
	margin-left: 4rem;
	color: var(--gray);
	opacity: 0.5;
	${({ colored }) =>
		colored &&
		css`
			color: var(--black-bike);
			opacity: 1;
		`}
`
