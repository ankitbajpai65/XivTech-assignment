import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Content from './Content';
import { Data } from './Data';

const App = () => {
  return (
    <>
      <div>
        {Data.map((val) => {
          return (
            <Content head={val.head} des={val.des} info={val.info} img={val.img} />
          );
        })
        }
      </div>
    </>
  );
}

export default App;
