import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGitBranch } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import LinkedIn from "../public/icons/linkedin@2x.png";
import GitHub from "../public/icons/github@2x.png";
import Behance from "../public/icons/behance@2x.png";
import Instagram from "../public/icons/instagram@2x.png";
import Gmail from "../public/icons/google@2x.png";
import Image from "next/image";
import Star from "@/public/Star.svg";
import logo from "@/public/work/logo.png"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Footer = () => {
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://api.github.com/repos/pranjalshikhar/portfolio-v3"
      ).then((res) => res.json());
      setMetaData({
        star: data.stargazers_count,
        forks: data.forks_count,
      });
    };
    getData();
  }, []);

  return (
   <>



{/* <div className="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-32 bg-gradient-to-r from-blue-100 to-blue-200  overflow-hidden">
  <div className="md:col-span-2">
    <h1 className="text-3xl font-bold text-black">Contact  Us </h1>
    <p className="text-7xl font-bold text-black mt-10">
      Kick Start Your Business 
    </p>
    <p className="text-7xl font-bold text-black mt-4">
      Today 
    </p>
   

    <button
className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all mt-10 bg-indigo-500 rounded-xl group">
<span
className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span
className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span
className="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"> Contact Us</span>
</button>


  </div>
  <div className="relative max-md:hidden h-[350px] w-[500px]">
  <DotLottieReact
      src="https://lottie.host/4d751c65-882c-4346-8c11-98121150cd47/r9FrZ43h10.lottie"
      loop
      autoplay
    />
  </div>
</div> */}




   <footer className="w-full">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/*Grid*/}
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
      <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
        <a
          href=""
          className="flex justify-center lg:justify-start"
        >
        <Image src={logo} alt="logo" width={200} height={200}/>
        </a>
        <h1 className="mt-5">Address</h1>
        <p className="py-2 text-lg text-gray-500 lg:max-w-xs text-center lg:text-left">
        315, Peelamedu Pudur, Sowri Palayam, Coimbatore, Tamil Nadu 641028, India
        </p>

     <h1>E Mail</h1>
        <p className="py-2 text-lg text-gray-500 mb-5 lg:max-w-xs text-center lg:text-left">
        rightupnext.innovations@gmail.com

        </p>


        <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
          
          <a
            href="https://www.linkedin.com/company/right-upnext-innovations/"
            className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
      <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF"/>
      <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white"/>
      </svg>

          </a>
          <a
            href=""
            className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
      <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="url(#paint0_linear_7092_54439)"/>
      <path d="M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_7092_54439" x1="90.9407" y1="91.5618" x2="-0.621143" y2="-2.46459e-06" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FBE18A"/>
          <stop offset="0.21" stop-color="#FCBB45"/>
          <stop offset="0.38" stop-color="#F75274"/>
          <stop offset="0.52" stop-color="#D53692"/>
          <stop offset="0.74" stop-color="#8F39CE"/>
          <stop offset="1" stop-color="#5B4FE9"/>
        </linearGradient>
      </defs>
      </svg>
          </a>
          <a
            href="https://chat.whatsapp.com/9998988998"
            className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
      <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#00D95F"/>
      <path d="M23.5068 66.8405L26.7915 54.6381C24.1425 49.8847 23.3009 44.3378 24.4211 39.0154C25.5413 33.693 28.5482 28.952 32.89 25.6624C37.2319 22.3729 42.6173 20.7554 48.0583 21.1068C53.4992 21.4582 58.6306 23.755 62.5108 27.5756C66.3911 31.3962 68.7599 36.4844 69.1826 41.9065C69.6053 47.3286 68.0535 52.7208 64.812 57.0938C61.5705 61.4668 56.8568 64.5271 51.5357 65.7133C46.2146 66.8994 40.6432 66.1318 35.8438 63.5513L23.5068 66.8405ZM36.4386 58.985L37.2016 59.4365C40.6779 61.4918 44.7382 62.3423 48.7498 61.8555C52.7613 61.3687 56.4987 59.5719 59.3796 56.7452C62.2605 53.9185 64.123 50.2206 64.6769 46.2279C65.2308 42.2351 64.445 38.1717 62.4419 34.6709C60.4388 31.1701 57.331 28.4285 53.6027 26.8734C49.8745 25.3184 45.7352 25.0372 41.8299 26.0736C37.9247 27.11 34.4729 29.4059 32.0124 32.6035C29.5519 35.801 28.2209 39.7206 28.2269 43.7514C28.2237 47.0937 29.1503 50.3712 30.9038 53.2192L31.3823 54.0061L29.546 60.8167L36.4386 58.985Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M54.9566 46.8847C54.5093 46.5249 53.9856 46.2716 53.4254 46.1442C52.8651 46.0168 52.2831 46.0186 51.7236 46.1495C50.8831 46.4977 50.3399 47.8134 49.7968 48.4713C49.6823 48.629 49.514 48.7396 49.3235 48.7823C49.133 48.8251 48.9335 48.797 48.7623 48.7034C45.6849 47.5012 43.1055 45.2965 41.4429 42.4475C41.3011 42.2697 41.2339 42.044 41.2557 41.8178C41.2774 41.5916 41.3862 41.3827 41.5593 41.235C42.165 40.6368 42.6098 39.8959 42.8524 39.0809C42.9063 38.1818 42.6998 37.2863 42.2576 36.5011C41.9157 35.4002 41.265 34.42 40.3825 33.6762C39.9273 33.472 39.4225 33.4036 38.9292 33.4791C38.4359 33.5546 37.975 33.7709 37.6021 34.1019C36.9548 34.6589 36.4411 35.3537 36.0987 36.135C35.7562 36.9163 35.5939 37.7643 35.6236 38.6165C35.6256 39.0951 35.6864 39.5716 35.8046 40.0354C36.1049 41.1497 36.5667 42.2144 37.1754 43.1956C37.6145 43.9473 38.0937 44.6749 38.6108 45.3755C40.2914 47.6767 42.4038 49.6305 44.831 51.1284C46.049 51.8897 47.3507 52.5086 48.7105 52.973C50.1231 53.6117 51.6827 53.8568 53.2237 53.6824C54.1018 53.5499 54.9337 53.2041 55.6462 52.6755C56.3588 52.1469 56.9302 51.4518 57.3102 50.6512C57.5334 50.1675 57.6012 49.6269 57.5042 49.1033C57.2714 48.0327 55.836 47.4007 54.9566 46.8847Z" fill="white"/>
      </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/right-upnext-innovations/"
            className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600"
          >
         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 93" fill="none">
      <rect x="1.13867" y="1" width="91.5618" height="91.5618" rx="15" fill="#006699"/>
      <path d="M37.1339 63.4304V40.9068H29.6473V63.4304H37.1346H37.1339ZM33.3922 37.8321C36.0023 37.8321 37.6273 36.1025 37.6273 33.9411C37.5785 31.7304 36.0023 30.0491 33.4418 30.0491C30.8795 30.0491 29.2061 31.7304 29.2061 33.9409C29.2061 36.1023 30.8305 37.8319 33.3431 37.8319H33.3916L33.3922 37.8321ZM41.2777 63.4304H48.7637V50.8535C48.7637 50.1813 48.8125 49.5072 49.0103 49.0271C49.5513 47.6815 50.7831 46.2887 52.8517 46.2887C55.5599 46.2887 56.644 48.354 56.644 51.3822V63.4304H64.1297V50.516C64.1297 43.598 60.4369 40.3787 55.5115 40.3787C51.4733 40.3787 49.6998 42.6357 48.7144 44.173H48.7643V40.9075H41.2781C41.3759 43.0205 41.2775 63.4312 41.2775 63.4312L41.2777 63.4304Z" fill="white"/>
      </svg>
          </a>



           
        </div>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-center sm:text-left">
        <h4 className="text-lg text-gray-900 font-bold mb-7">Right UpNext</h4>
        <ul className="text-lg  transition-all duration-500">
          <Link href={"/"}>
          <li className="mb-6">
            <a

              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          </Link>

          <Link href={"/about"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              About
            </a>
          </li>
          </Link>

          <Link href={"/camara"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Prolens
            </a>
          </li>
          </Link>

          <Link href={"/contact"}>
          <li>
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
          </li>
          </Link>

         
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-center sm:text-left">
        <h4 className="text-lg text-gray-900 font-bold mb-7">Services</h4>
        <ul className="text-lg  transition-all duration-500">

          <Link href={"/services/software"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
              Software Discovery
            </a>
          </li>
          </Link>

          <Link href={"/services/app"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              App Development
            </a>
          </li>
          </Link>

          <Link href={"/services/digital"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Digital Marketing
            </a>
          </li>
          </Link>

          <Link href={"/camara"}>
          <li>
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
            Brand Shoots
            </a>
          </li>
          </Link>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-center sm:text-left">
        <h4 className="text-lg text-gray-900 font-bold mb-7">Resources</h4>
        <ul className="text-lg  transition-all duration-500">
          <Link href={"/work"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
              Work
            </a>
          </li>
          </Link>
          <Link href={"/tech"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
             Tech
            </a>
          </li>
          </Link>
          <Link href={"/timeline"}>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
            Products 
            </a>
          </li>
          </Link>
         
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-center sm:text-left">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Contact</h4>
        <ul className="text-lg  transition-all duration-500">
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
             Phone -  6385557221
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Phone -  9159260221
            </a>
          </li>
          <li className="mb-6">
            <a
              href="https://wa.me/9159260221" target="_blank"
              className=" text-gray-600 hover:text-gray-900"
            >
              Whats App
            </a>
          </li>
         
        </ul>
      </div>
    </div>
    {/*Grid*/}

    
    <div className="py-7 border-t border-gray-200">
      <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
       
      <span className="text-sm text-gray-500 ">
  ©<a href="https://pagedone.io/">Right UpNext Innovations  </a>
  {new Date().getFullYear()}, All rights reserved.
</span>

        <ul className="flex items-center gap-9 mt-4 lg:mt-0">
          <li>
            <a href="javascript:;" className="text-sm text-gray-500">
              Terms
            </a>
          </li>
          <li>
            <a href="javascript:;" className="text-sm text-gray-500">
              Privacy
            </a>
          </li>
          <li>
            <a href="javascript:;" className="text-sm text-gray-500">
            coookies
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

   </>
  );
};

export default Footer;
