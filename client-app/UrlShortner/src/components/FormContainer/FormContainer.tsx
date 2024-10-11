import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className='container mx-auto p-2'>
        <div className='bg-banner my-8 rounded-xl bg-cover'>
            <h2>URL Shortner</h2>
        </div>
    </div>
  );
};

export default FormContainer;
