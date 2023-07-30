'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
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
				className='mx-auto flex  lg:w-5/6 max-w-7xl items-center justify-between p-2 md:p-6 lg:px-8'
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
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<span className='sr-only'>Open main menu</span>
						<MenuIcon />
					</button>
				</div>

				{/* Desktop User Details */}
				<div className='hidden lg:flex lg:flex-row lg:justify-end items-center justify-center'>
					<span className='mx-2'>
						<SearchBar />
					</span>
					<span className='mx-2'>
						<SettingsIcon />
					</span>
					<span className='mx-2'>
						<NotificationIcon />
					</span>
					<span className='mx-2'>
						<UserIcon />
					</span>
					<span className='mx-2'>
						<p className='text-sm font-semibold text-[#605DEC]'>
							Adriana Arias
						</p>
					</span>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div className='flex flex-col items-end mx-3 justify-center lg:hidden'>
				{mobileMenuOpen && (
					<div className='flex flex-col items-end'>
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
				)}
			</div>

			{/* Mobile Search Bar */}
			<div className='md:hidden flex flex-col items-center justify-center my-3'>
				<div className='flex flex-row items-center justify-center'>
					<SearchBar />
				</div>
			</div>
		</header>
	);
};

export default Header;
