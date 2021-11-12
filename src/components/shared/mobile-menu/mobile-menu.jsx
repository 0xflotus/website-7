import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';

const ANIMATION_EASE = [0.25, 0.1, 0, 1];
const ANIMATION_DURATION = 0.5;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      ease: ANIMATION_EASE,
      duration: ANIMATION_DURATION,
    },
  },
  to: {
    opacity: 1,
    translateY: 0,
    transition: {
      ease: ANIMATION_EASE,
      duration: ANIMATION_DURATION,
    },
  },
};

const links = [
  {
    text: 'Pricing',
    to: '/',
  },
  {
    text: 'Team',
    to: '/',
  },
  {
    text: 'Docs',
    to: '/',
  },
  {
    text: 'Changelog',
    to: '/',
  },
  {
    text: 'Blog',
    to: '/',
  },
];

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
    } else {
      controls.start('from');
    }
  }, [isOpen, controls]);

  return (
    <motion.nav
      className="hidden absolute z-[999] top-20 right-8 left-8 bg-white rounded-md pt-4 px-8 pb-7 md:right-4 md:left-4 lg:block"
      initial="from"
      animate={controls}
      variants={variants}
      style={{ boxShadow: '0px 10px 20px rgba(26, 26, 26, 0.4)' }}
    >
      <ul className="flex flex-col text-center">
        {links.map(({ text, to }, index) => (
          <li key={index}>
            <Link className="block py-4" to={to} size="sm" theme="black">
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="w-full mt-4" to="/" size="sm" theme="secondary">
        Sign Up
      </Button>
    </motion.nav>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;