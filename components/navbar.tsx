"use client";
import { navbarList } from '@/lib/constant';
import StaggeredMenu from './StaggeredMenu';
import PillNav from './PillNav';
import { montserrat } from '@/lib/utils';

export default function Navbar() {
  return (
    <div className='flex justify-center items-center w-full'>
      <PillNav
        logo={"/logo-1.png"}
        logoAlt="Company Logo"
        items={navbarList}
        activeHref="/"
        className={`custom-nav ${montserrat.className}`}
        ease="power2.easeOut"
        baseColor="#FCB53B"
        pillColor="#E8E2DB"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        // theme="light"
        initialLoadAnimation={true}
      />
    </div>
    // <div style={{ height: '100%', position: "fixed", zIndex: 9998 }}
    //   className='w-full'>
    //   <StaggeredMenu
    //     title='Game Object'
    //     className='fixed z-999'
    //     isFixed={false}
    //     position="left"
    //     items={navbarList}
    //     // socialItems={socialItems}
    //     displaySocials={false}
    //     displayItemNumbering={true}
    //     menuButtonColor="#000000"
    //     openMenuButtonColor="#000000"
    //     changeMenuColorOnOpen={true}
    //     colors={['#fcc800', '#ff6900']}
    //     logoUrl="/logo-1.png"
    //     accentColor="#fcc800"
    //     onMenuOpen={() => console.log('Menu opened')}
    //     onMenuClose={() => console.log('Menu closed')}
    //   />
    // </div>

  )
}
