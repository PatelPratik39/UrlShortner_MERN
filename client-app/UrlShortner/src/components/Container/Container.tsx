import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helper/constant';
import DataTable from '../DataTable/Datatable';

interface IContainerProps {

}

const Container: React.FunctionComponent<IContainerProps> = () => {

    const [data, setData] = React.useState<UrlData[]>([]);

    const fetchTableData = async () => {
        const resposne = await axios.get(`${serverUrl}/shortUrl`)
        console.log("The Response from server is : ", resposne);
        setData(resposne.data)
        // console.log("Data : ", data);
    }

    React.useEffect(() => {
        fetchTableData();
    }, [])


    return <div><FormContainer />
        <DataTable data={data}/></div>
};

export default Container;
