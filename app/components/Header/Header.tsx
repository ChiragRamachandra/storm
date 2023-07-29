'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState } from 'react';
import { StormLogo } from '@/app/icons/StormLogo';
import { StormText } from '@/app/icons/StormText';
import { SettingsIcon } from '@/app/icons/SettingsIcon';
import { NotificationIcon } from '@/app/icons/NotificationIcon';
import { UserIcon } from '@/app/icons/UserIcon';
import SearchBar from '../SearchBar/SearchBar';
import { MenuIcon } from '@/app/icons/MenuIcon';

type Props = {};

const Header = (props: Props) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className='bg-white'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-2 md:p-6 lg:px-8'
				aria-label='Global'
			>
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<div className='flex flex-row items-center justify-between m-2'>
							<span className='mr-2'>
								<StormLogo />
							</span>
							<StormText />
						</div>
					</a>
				</div>

				{/* Mobile Menu Icon */}
				<div className='flex flex-col'>
					<div className='flex lg:hidden'>
						<button
							type='button'
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle mobileMenuOpen state on click
						>
							<span className='sr-only'>Open main menu</span>
							<MenuIcon />
						</button>
					</div>
				</div>

				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<SearchBar />
					<SettingsIcon />
					<NotificationIcon />
					<UserIcon />
					<p className='text-sm font-semibold leading-6 text-gray-900'>
						Adriana Arias
					</p>
				</div>
			</nav>
			<div className='flex flex-col items-end mx-3 justify-center'>
				<div
					className={`lg:hidden ${
						mobileMenuOpen ? 'flex flex-col items-end justify-center' : 'hidden'
					}`}
				>
					<div className='my-2'>
						<SettingsIcon />
					</div>
					<div className='my-2'>
						<NotificationIcon />
					</div>
					<div className='my-2'>
						<p className='text-sm font-semibold leading-6 text-gray-900'>
							<UserIcon />
						</p>
					</div>
				</div>
			</div>
			<div className='md:hidden flex flex-col items-center justify-center my-3'>
				<div className='flex flex-row items-center justify-center'>
					<SearchBar />
				</div>
			</div>
		</header>
	);
};

export default Header;
