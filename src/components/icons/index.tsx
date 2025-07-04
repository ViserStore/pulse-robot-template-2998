
import React from "react";

// icon library
import * as Icons from "./lib";

interface Match {
  [key: string]: JSX.Element;
}

type IconType = keyof Match;

interface Props {
  icon: IconType | any;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = React.memo(({ icon, ...props }: Props) => {
  const match: Match = {
    logo: () => (
      <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.7 12L4.35 16.35L0 12L4.35 7.65L8.7 12ZM12 8.7L16.35 4.35L20.7 8.7L16.35 13.05L12 8.7ZM12 15.3L16.35 19.65L20.7 15.3L16.35 10.95L12 15.3ZM23.4 12L19.05 7.65L23.4 3.3L27.75 7.65L23.4 12Z" fill="#F0B90B"/>
        <text x="35" y="16" fill="#1E2329" fontSize="16" fontWeight="600">Binance</text>
      </svg>
    ),
    gift: <Icons.GiftIcon {...props} />,
    chevronRight: <Icons.ChevronRightIcon {...props} />,
    user: <Icons.UserIcon {...props} />,
    google: <Icons.GoogleIcon {...props} />,
    apple: <Icons.AppleIcon {...props} />,
    triangleIcon: <Icons.TriangleIcon {...props} />,
    BinanceQr: <Icons.BinanceQr {...props} />,
    AndroidApk: <Icons.AndroidApk {...props} />,
    GooglePlay: <Icons.GooglePlay {...props} />,
    MacOs: <Icons.MacOs {...props} />,
    Windows: <Icons.Windows {...props} />,
    Linux: <Icons.Linux {...props} />,
    Api: <Icons.Api {...props} />,
    globe: <Icons.Globe {...props} />,
    cash: <Icons.Cash {...props} />,
    arrowRight: <Icons.ArrowRight {...props} />,
    search: <Icons.Search {...props} />,
    qrDownload: <Icons.QrDownload {...props} />,
    darkMode: <Icons.DarkMode {...props} />,
    lightMode: <Icons.LightMode {...props} />,
    eye: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    eyeOff: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m9.88 9.88a3 3 0 1 0 4.24 4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a13.16 13.16 0 0 1-1.67 2.68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m6.61 6.61A13.526 13.526 0 0 0 1 12s4 8 11 8a9.74 9.74 0 0 0 5-1.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    google: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    apple: () => (
      <svg width="24" height="24" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0152 12.4689C13.771 13.0279 13.482 13.5424 13.1471 14.0155C12.6906 14.6604 12.3169 15.1068 12.0289 15.3547C11.5824 15.7616 11.104 15.97 10.5917 15.9818C10.224 15.9818 9.78048 15.8781 9.26423 15.6678C8.74628 15.4584 8.27029 15.3547 7.83506 15.3547C7.37861 15.3547 6.88906 15.4584 6.36543 15.6678C5.84101 15.8781 5.41854 15.9878 5.09553 15.9986C4.60429 16.0194 4.11465 15.8051 3.6259 15.3547C3.31395 15.0851 2.92377 14.6229 2.45636 13.9681C1.95485 13.2688 1.54255 12.458 1.21954 11.5336C0.873609 10.5351 0.700195 9.5682 0.700195 8.63213C0.700195 7.55987 0.934005 6.63506 1.40232 5.86007C1.77038 5.23757 2.26002 4.74652 2.87285 4.38604C3.48567 4.02556 4.14783 3.84186 4.86092 3.83011C5.2511 3.83011 5.76277 3.94971 6.39862 4.18476C7.03268 4.42061 7.4398 4.54021 7.6183 4.54021C7.75175 4.54021 8.20401 4.40036 8.97072 4.12156C9.69577 3.863 10.3077 3.75594 10.809 3.79811C12.1674 3.90675 13.188 4.4374 13.8667 5.39342C12.6518 6.12288 12.0508 7.14457 12.0628 8.45525C12.0737 9.47616 12.4475 10.3257 13.182 11.0003C13.5149 11.3133 13.8866 11.5553 14.3002 11.7272C14.2105 11.9849 14.1158 12.2318 14.0152 12.4689ZM10.8997 0.320091C10.8997 1.12027 10.6047 1.8674 10.0167 2.55894C9.30708 3.38104 8.44879 3.85608 7.51804 3.78112C7.50618 3.68512 7.4993 3.58409 7.4993 3.47792C7.4993 2.70975 7.83676 1.88765 8.43603 1.21547C8.73522 0.875136 9.11573 0.592152 9.57717 0.36641C10.0376 0.144037 10.4731 0.0210593 10.8828 0C10.8947 0.106972 10.8997 0.213951 10.8997 0.320081V0.320091Z" fill="currentColor"/>
      </svg>
    )
  }
  if (!match[icon]) return null;
  return <span className="icon">{match[icon]}</span>;
})

Icon.displayName = 'Icon';
export default Icon
