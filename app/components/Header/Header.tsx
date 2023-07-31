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
		<header className='bg-white my-12'>
			<nav
				className='mx-auto flex  lg:w-5/6 max-w-7xl items-center justify-between  '
				aria-label='Global'
			>
				<div className='flex lg:flex-1 ml-6 md:ml-0'>
					<div className='flex flex-row items-center justify-between m-2 '>
						<span>
							<StormLogo />
						</span>
						<StormText />
					</div>
				</div>

				{/* Mobile Menu Icon */}
				<div className='flex lg:hidden mr-6'>
					<button
						type='button'
						className='inline-flex items-center justify-center rounded-md p-2 text-gray-700'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<span className='sr-only'>Open main menu</span>
						<MenuIcon />
					</button>
				</div>

				{/* Desktop User Details */}
				<div className='hidden lg:flex lg:flex-row lg:justify-end items-center justify-center'>
					<span className='mx-10'>
						<SearchBar />
					</span>
					<span className='mx-4'>
						<SettingsIcon />
					</span>
					<span className='mx-4'>
						<NotificationIcon />
					</span>
					<span className='ml-4 mr-2'>
						<UserIcon />
					</span>
					<span>
						<p className='text-sm font-semibold text-[#605DEC]'>
							Adriana Arias
						</p>
					</span>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div className='flex flex-col items-end mx-3 justify-center lg:hidden mr-8'>
				{mobileMenuOpen && (
					<div className='flex flex-col items-end'>
						<div className='my-2'>
							<SettingsIcon />
						</div>
						<div className='my-2'>
							<NotificationIcon />
						</div>
						<div className='my-2'>
							<UserIcon />
						</div>
					</div>
				)}
			</div>

			{/* Mobile Search Bar */}
			<div className='md:hidden flex flex-col items-center justify-center mt-6'>
				<div className='flex flex-row items-center justify-center'>
					<SearchBar />
				</div>
			</div>
		</header>
	);
};

export default Header;
