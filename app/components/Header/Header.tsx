'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState } from 'react';
import { StormLogo } from '@/app/icons/StormLogo';
import { StormText } from '@/app/icons/StormText';
import { SettingsIcon } from '@/app/icons/SettingsIcon';
import { NotificationIcon } from '@/app/icons/NotificationIcon';
import { UserIcon } from '@/app/icons/UserIcon';

type Props = {};

const Header = (props: Props) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className='bg-white'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
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
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						{/* <Bars3Icon className='h-6 w-6' aria-hidden='true' /> */}
					</button>
				</div>

				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<SettingsIcon />
					<NotificationIcon />
					<UserIcon />
					<a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
						Adriana Arias
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
