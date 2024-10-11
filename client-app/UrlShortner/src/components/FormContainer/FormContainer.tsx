import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='bg-banner w-full h-full bg-cover bg-center'>
        <div className='w-full h-full p-20 backdrop-brightness-50 flex flex-col justify-center items-center'>
          <h2 className='text-white text-4xl text-center pb-4'>URL Shortner</h2>
          <p className='text-white text-center pb-2 text-xl font-extralight'>Paste your URL to make it shorter</p>
          <p className='text-white text-center pb-4 text-sm font-thin'>It's a Free tool to shorten URLs, use this URL shortener tool to create a shortened & neat link, making it easy to use</p>
          <form>
            <div className='flex'>
              <div className='relative w-full'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none'>urlshortner.link/</div>
                <input type='text' placeholder='Enter your URL link' required className='block w-full p-4 pl-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500' />
                <button type='submit' className='absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:ring-blue-400'> Short URL</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
