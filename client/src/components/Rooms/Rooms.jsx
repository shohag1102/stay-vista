import React, {useEffect, useState} from 'react';
import Card from "./Card.jsx";
import Container from "../Shared/Container.jsx";
import {useSearchParams} from "react-router-dom";
import Heading from "../Shared/Heading.jsx";
import Loader from "../Shared/Loader.jsx";

const Rooms = () => {
    let [rooms, setRooms] = useState([])
    let [params, setParams] = useSearchParams()
    let [loading, setLoading] = useState(false)
    let category = params.get('category')
    useEffect(() => {
        setLoading(true)
        fetch("https://raw.githubusercontent.com/shakilahmedatik/b9-stayVista-starter-template/main/client/public/rooms.json")
            .then(resp => resp.json())
            .then(data => {
                if (category) {
                    const filteredData = data.filter(cat => cat.category === category)
                    setRooms(filteredData)
                } else setRooms(data)
                setLoading(false)
            })
    }, [category]);

    if(loading) return <Loader />
    return (
        <Container>
            {
                (rooms && rooms.length > 0) ?
                    <div
                        className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-12"}>
                        {
                            rooms.map(room => {
                                return <Card room={room} key={room._id}/>
                            })
                        }
                    </div>
                    :
                    <div className={"min-h-[calc(100vh-300px)] flex justify-center items-center"}>
                        <Heading title={"No rooms available in this category!"} center={true}
                                 subtitle={"Please select other categories."}/>
                    </div>
            }
        </Container>
    )
};

export default Rooms;