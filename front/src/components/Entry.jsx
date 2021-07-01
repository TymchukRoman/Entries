import { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom'
import { deleteEntry, searchOne } from '../api/api';
import { Button } from 'react-bootstrap';

const Entry = () => {

  const [location, setLocation] = useState("");
  const [entry, setEntry] = useState("");
  const [exist, setExist] = useState(true);

  const preLocation = useLocation().pathname;

  useEffect(() => {
    setLocation(preLocation.split("/")[2]);
    searchOne(preLocation.split("/")[2]).then((res) => {
      setEntry(res.data.data)
    })
    //eslint-disable-next-line
  }, [])

  const deleteThisEntry = () => {
    deleteEntry({ id: location })
    setExist(false)
  }

  return (
    <div>
      {exist
        ? <div>
          <h2>{entry.title} <Button style={{ marginLeft: "50px" }} onClick={deleteThisEntry} variant="danger">Delete</Button></h2>
          <p style={{ whiteSpace: "pre-line" }}>{entry.data}</p>
          <p>entry id: {location}</p>
        </div >
        : <Redirect to="/list" />
      }
    </div>
  );
}

export default Entry;
