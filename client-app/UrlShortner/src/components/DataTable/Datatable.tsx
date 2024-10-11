import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../helper/constant';

interface IDataTableProps {
    data: UrlData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const { data } = props;
    console.log("Data is datatable", data);


    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr key={item._id} className='border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800'>
                    <td className='px-6 py-3 break-words'>
                        <Link to={item.fullUrl} target='_blank' rel='noreferrer noo'>
                            {item.fullUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3 break-words'>
                        <Link to={`${serverUrl}/shortUrl/${item.shortUrl}`} target='_blank' rel='noreferrer noopener'>
                            {item.fullUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3 '>
                        {item.clicks}
                    </td>
                    <td className='px-6 py-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>




                    </td>
                </tr>
            )
        })

    }
    return (
        <div className='conatainer mx-auto pt-2 pb-10'>
            <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
                <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
                    <thead className='text-md uppercase text-gray-50 bg-gray-700'>
                        <tr>
                            <th scope='col' className='px-6 py-3 w-6/12'>FullUrl</th>
                            <th scope='col' className='px-6 py-3 w-3/12'>Short Url</th>
                            <th scope='col' className='px-6 py-3 '>Clicks </th>
                            <th scope='col' className='px-6 py-3 '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;