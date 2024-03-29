import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Card from "./Card";
import Loader from "../Shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} room={room}></Card>
          ))}
        </div>
      ) : (
        <div>
          <Heading
            title={"No Rooms Found in this category"}
            subtitle={"Please Select other Category"}
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
