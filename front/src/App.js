import React, { useEffect, useState } from "react";
import { Route } from 'react-router';
import './App.css';
import Create from './components/Create';
import List from './components/List';
import Categories from './components/Categories';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEntries, searchByTags, searchTitle } from "./api/api";
import Entry from "./components/Entry";


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getEntries().then((res) => {
      setData([...res.data.data])
    })
    // eslint-disable-next-line
  }, [])

  const newEntries = () => {
    getEntries().then((res) => {
      setData([...res.data.data])
    })
  }

  const searchTags = (tags) => {
    searchTags(tags).then()
  }

  const startSearch = (data) => {
    searchTitle(data).then((res) => {
      setData([...res.data.data])
    })
  }

  const categorySearch = (data) => {
    searchByTags(data).then((res) => {
      setData([...res.data.data])
    })
  }

  return (
    <div>
      <Header startSearch={startSearch} />
      <div>
        <Route path='/create'
          render={() => <Create />} />
        <Route path='/list'
          render={() => <div className="fullcontainer">
            <div className="categories">
              <Categories categorySearch={categorySearch} />
            </div>
            <div className="itemlist">
              <List data={data} searchTags={searchTags} newEntries={newEntries} />
            </div>
          </div>} />
        <Route path='/entry'
          render={() => <Entry />} />
      </div>

    </div>
  );
}

export default App;
