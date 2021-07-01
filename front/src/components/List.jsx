import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card, Badge, Button, CardColumns, Popover, OverlayTrigger } from 'react-bootstrap';
import "./components.css"

const List = (props) => {

  useEffect(() => {
    props.newEntries()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {!props.data
        ? <>w8 fr props.data</>
        : <div>
          <CardColumns>
            {props.data.map((entry) => {
              return (
                <div key={entry.title}>
                  <Card border="success" style={{ width: '96%' }}>
                    <Card.Body>

                      <h3><b>{entry.title.slice(0, 10)}{entry.title.length > 10 ? "..." : ""}</b></h3>
                          Info: {entry.data.slice(0, 20)}{entry.data.length > 20 ? "..." : "."}

                      <br />
                      {entry.tags.length > 5
                        ? <PopoverComponent tags={entry.tags} />
                        : entry.tags.map((tag) => {
                          return <Badge key={entry.title + tag} variant="primary" style={{ marginLeft: "3%" }}>
                            {tag}
                          </Badge>
                        })
                      }
                      <br />
                      <NavLink className="listItem" to={`entry/${entry._id}`}>
                        <Button variant="success" style={{ marginLeft: "70%", width: "30%" }} >Info</Button>
                      </NavLink>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </CardColumns>
        </div>
      }
    </div>
  );
}

const PopoverComponent = (props) => {
  let counter = 0;
  const newTags = props.tags.filter(() => {
    counter++;
    return counter < 5;
  })
  console.log(newTags)
  const popup = (<Popover id="popover-basic">
    <Popover.Title as="h3">Tags</Popover.Title>
    <Popover.Content>
      {props.tags.map((tag) => {
        return <Badge key={tag} variant="primary" style={{ marginLeft: "3%" }}>
          {tag}
        </Badge>
      })}
    </Popover.Content>
  </Popover>)
  return <div>
    {newTags.map((tag) => {
      return <Badge key={tag + tag} variant="primary" style={{ marginLeft: "3%" }}>
        {tag}
      </Badge>
    })}
    <OverlayTrigger trigger="click" placement="top" overlay={popup}>
      <Button size="sm" style={{ height: "10px", textSize: "5px", marginLeft: "3%" }} ></Button>
    </OverlayTrigger>
  </div>
}

export default List;
