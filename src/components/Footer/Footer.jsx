import React from 'react'
import BLogo from '../../assets/B-Colored.svg'
import eBike from '../../assets/eBike.svg'

import {
	Copyright,
	Description,
	FooterContainer,
	FooterWrapper,
	LeftContent,
	LogoContainer,
	MenuLists,
	Others,
	RightContent,
} from './Footer.styles'

const Footer = () => {
	const menuLists = [
		{
			id: 1,
			title: 'Company',
		},
		{
			id: 2,
			title: 'Product',
		},
		{
			id: 3,
			title: 'Bike Type',
		},
		{
			id: 4,
			title: 'About Us',
		},
		{
			id: 5,
			title: 'Contact',
		},
	]

	const others = [
		{
			id: 1,
			title: 'Help',
		},
		{
			id: 2,
			title: 'Help Center',
		},
		{
			id: 3,
			title: 'Contact Support',
		},
		{
			id: 4,
			title: 'Instructions',
		},
		{
			id: 5,
			title: 'How it works',
		},
	]
	return (
		<FooterWrapper>
			<FooterContainer>
				<LeftContent>
					<LogoContainer>
						<div className='BLogo'>
							<img src={BLogo} alt='Logo' />
						</div>
						<div className='eBike'>
							<img src={eBike} alt='Logo' />
						</div>
					</LogoContainer>
					<Description>
						Trafalgar provides progressive, and affordable healthcare,
						accessible on mobile and online for everyone
					</Description>
					<Copyright>©eBike 2021. All rights reserved</Copyright>
				</LeftContent>
				<RightContent>
					<MenuLists>
						<ul>
							{menuLists.map((list) => (
								<li key={list.id}>{list.title}</li>
							))}
						</ul>
					</MenuLists>
					<Others>
						<ul>
							{others.map((list) => (
								<li key={list.id}>{list.title}</li>
							))}
						</ul>
					</Others>
				</RightContent>
			</FooterContainer>
		</FooterWrapper>
	)
}

export default Footer
