import Image from 'next/image';
import Logo from '@/assets/images/sunga-logo.png';
import LogoBlack from '@/assets/images/sunga-logo.png';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HamburgerIcon from '@/assets/icons/hamburger';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';


 const CONSENT_COOKIE_NAME = 'user_cookie_consent';
 const COOKIE_EXPIRY_DAYS = 365;

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
   const [isVisible, setIsVisible] = useState(false);

   const handleAccept = () => {
     Cookies.set(CONSENT_COOKIE_NAME, 'accepted', {
       expires: COOKIE_EXPIRY_DAYS,
       sameSite: 'Strict'
     });
     setIsVisible(false);
     console.log('Analytics enabled! Implement your script loading here.');
   };
 
   useEffect(() => {
     const userConsent = Cookies.get(CONSENT_COOKIE_NAME);
     if (!userConsent) {
       setIsVisible(true);
     }
   }, []);

  const links = [
    { name: 'How It Works', href: '/', dropdown: null },
    { name: 'Savings Plan', href: '/', dropdown: null },
    { name: 'Security', href: '/', dropdown: null },
    { name: 'Contact', href: '/', dropdown: null }
  ];
  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Effect to disable scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      // Disable scrolling on body when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = '';
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={classNames(` w-full  transition-all ease-in-out`, {
        'h-screen fixed top-0 z-50 !bg-[#fff] !text-[#000] ': open,
        'fixed top-0 z-50 left-0 bg-white text-black':
          !scrolled && router.pathname == '/',
        'fixed top-0 left-0 z-50 bg-white shadow text-black': scrolled
      })}
    >
      {!isVisible ? null : (
        <div className="border-b bg-[#1A1A1A] p-[12px] text-white font-semibold  lg:text-[16px] text-[10px] !font-red-hat-display lg:gap-4 gap-1 lg:leading-[27.2px] leading-[100%] items-center justify-center text-center border-gray-200">
          This website uses cookies to improve your browsing experience. For
          more information, please review our{' '}
          <Link href="/privacy-policy">Privacy Policy.</Link>{' '}
          <Button
            onClick={handleAccept}
            className="text-white lg:!py-[4px] !py-[2px] !font-red-hat-display !h-auto "
          >
            Ok
          </Button>
        </div>
      )}
      <div className="container p-4 py-[20px] mx-auto justify-between flex items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src={
                open || (!scrolled && router.pathname == '/') ? Logo : LogoBlack
              }
              alt="sunga-web"
              width={500}
              height={500}
              className="lg:h-[36.27px] h-[31.74px] lg:w-full w-fit"
            />
          </Link>
        </div>
        <nav>
          <ul className="lg:flex hidden space-x-4">
            {links.map((link) => (
              <li key={link.name} className="relative text-[#181816] group">
                <Link
                  href={link?.dropdown ? '#' : link.href}
                  className={classNames(
                    'font-semibold !font-plus-jakarta-sans tracking-[-0.48px] leading-[27.2px] text-[16px] p-2',
                    {
                      '':
                        router.pathname == link.href ||
                        router.pathname.startsWith(link.href)
                    }
                  )}
                >
                  {link.name}
                </Link>
                <div className="hidden transition-all duration-200 ease-in-out group-hover:block">
                  {link.dropdown && link.dropdown}
                </div>
              </li>
            ))}
          </ul>
          <Button
            onClick={handleClick}
            variant={'ghost'}
            className="lg:hidden flex items-center justify-center w-10 lg:h-10 h-[12px]"
          >
            <HamburgerIcon className="text-black" />
          </Button>
        </nav>
        <Button className="text-white !font-red-hat-display !h-auto lg:flex hidden">
          Download App
        </Button>
      </div>

      {open && (
        <div
          className={classNames(
            'w-full h-full lg:hidden  container flex-col justify-between p-4 mx-auto transition-transform duration-300 ease-in-out'
          )}
        >
          <div className="flex flex-col gap-[22px] justify-center text-center w-full">
            {links.map((link) => (
              <Link
                key={link.name}
                className={classNames(
                  '!w-full bg-[#FFFFFF0A] rounded-[48px] p-[12.61px] group font-medium text-[14px] uppercase  ',
                  {
                    'border rounded-full  w-full':
                      router.pathname == link.href ||
                      router.pathname.startsWith(link.href)
                  }
                )}
                href={link?.dropdown ? '/products/ sunga' : link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* <Footer
            iconsColor="!text-[#9FD702]"
            className="!text-white !pb-4 !pt-10"
          /> */}
        </div>
      )}
    </header>
  );
};

// const ProductDropdown = () => {
//   const items = [
//     {
//       logo: null,
//       description:
//         '',
//       coming: false,
//       link: '/'
//     }
//    ];

//   return (
//     <div className="lg:absolute lg:-left-52 lg:top-[150%] flex flex-col gap-3 shadow-2xl !text-black bg-white rounded p-3 w-[533px]">
//       <h1 className="text-xl font-semibold">Products</h1>
//       <div className="grid grid-cols-2 gap-3">
//         {items.map((item, index) => (
//           <Link
//             key={index}
//             href={item.link}
//             className="border p-2 border-gray-300 rounded flex flex-col gap-2"
//           >
//             <div className="flex justify-between">
//               <div>
//                 <Image src={item?.logo} alt=" loog" />
//               </div>
//               <div className="bg-[#F7F7F7] p-1 text-xs rounded">
//                 Coming Soon
//               </div>
//             </div>
//             <div className="text-xs">{item.description}</div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Header;
