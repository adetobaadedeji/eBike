import React from 'react'
import logo from '../../assets/Logo-eBike.svg'
import {
	HeaderContainer,
	HeaderWrapper,
	LogoContainer,
	MenuContainer,
	MenuLink,
} from './Header.styles'

const Header = () => {
	const links = [
		{
			id: 1,
			text: 'Product',
			url: '#product',
			colored: 'true'
		},
		{
			id: 2,
			text: 'Bike Type',
			url: '#type',
		},
		{
			id: 3,
			text: 'About us',
			url: '#about',
		},
		{
			id: 4,
			text: 'Testimonials',
			url: '#testimonials',
		},
		{
			id: 5,
			text: 'Contact',
			url: '#contact',
		},
	]
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
				<MenuContainer>
					{links.map(({ id, text, url, colored }) => (
						<MenuLink key={id} href={url} colored={colored}>
							{text}
						</MenuLink>
					))}
				</MenuContainer>
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export default Header
