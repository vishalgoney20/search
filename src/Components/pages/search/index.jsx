import * as React from 'react';
import Layout from '../../templates/layout';
import AppTable from '../../organisms/Table';
import SearchInput from '../../organisms/SearchInput';

export default function Search() {

    const [name, setName] = React.useState("")

    const handleSearchInputChange =(value)=>{
        setName(value)
    }

  return (
    <React.Fragment>
        <Layout>

            <SearchInput value={name} onChange={handleSearchInputChange}/>
            <AppTable name={name}>

            </AppTable>
            
        </Layout>
    </React.Fragment>
  );
}
