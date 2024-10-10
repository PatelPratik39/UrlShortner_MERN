
import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-base text-center'>
        Copyright &#169; URLSHORTNER | Pratik Patel
    </div>
  ) ;
};

export default Footer;
