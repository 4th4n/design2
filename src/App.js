import React from 'react';
import ProdManagement from './ProductManagement';
import StockManagement from './StockManagement';
import CategoryManagement from './CategoryManagement';
import { ProdListProvider } from './ProdListContext';
import TransactionManagement from './TransactionManagement';
import { Container,Row,Tabs } from 'react-bootstrap';


const App = () => {
  const [selectedTab, setSelectedTab] = React.useState('Product Management');

  const TabContent = () => {
    if (selectedTab === 'Product Management') {
      return <ProdManagement />;
    } else if (selectedTab === 'Stock Management') {
      return <StockManagement />;
    } else if (selectedTab === 'Category Management') {
      return <CategoryManagement />;
    } else if (selectedTab === 'Transaction Management') {
      return <TransactionManagement />;
    }
    return null;
  };

  return (
    <ProdListProvider>
    <Container className='py-4' >
      <Row className='justify-content-center'>
        <Tabs justify variant='pills'defaultActivekey='tab-1'className='mb-1 p-2'>
          
          <Tabs eventKey="ProdManagement " title='Product Management'>
            <button onClick={() => setSelectedTab('Product Management')}></button>
          </Tabs>
          <Tabs eventKey="StockManagement" title='Stock Management'
          >
         <button eventKey="StockManagement" title='Stock Management' onClick={() => setSelectedTab('Stock Management')}></button>
          </Tabs>
          <Tabs eventKey="CategoryManagement" title='Category Management'>
            <button onClick={() => setSelectedTab('Category Management')} ></button>
          </Tabs>
          <Tabs eventKey="TransactionManagement" title='Transaction Management' onClick={() => setSelectedTab('Transaction Management')}>
          
          </Tabs>
        </Tabs>
      </Row>
    </Container>
    {TabContent()}
    </ProdListProvider>
    // <ProdListProvider>
    //   <div>
    //     <ul style={{ display: 'flex', listStyle: 'none',}}>
    //       <li style={{ marginRight: '10px',padding:'5px'}}>
    //       <button className="btn btn-secondary custom-button" onClick={() => setSelectedTab('Product Management')}style={styles.sty}>Product Management</button>
    //       </li>
    //       <li style={{ marginRight: '10px',padding:'5px'}}>
    //       <button class="btn btn-secondary custom-button" onClick={() => setSelectedTab('Stock Management')}style={styles.sty}>Stock Management</button>
    //       </li>
    //       <li style={{ marginRight: '10px',padding:'5px' }}>
    //       <button class="btn btn-secondary custom-button" onClick={() => setSelectedTab('Category Management')}style={styles.sty}>Category Management</button>
    //       </li>
    //       <li style={{ marginRight: '10px',padding:'5px' }}>
    //       <button class="btn btn-secondary custom-button"onClick={() => setSelectedTab('Transaction Management')}style={styles.sty}>Transaction Management</button>
    //       </li>
    //     </ul>
    //     <hr />
    //   6
    //   </div>
    // </ProdListProvider>
  );
};

export default App;
