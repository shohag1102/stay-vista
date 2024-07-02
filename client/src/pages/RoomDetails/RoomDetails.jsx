import Container from "../../components/Shared/Container.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../../components/Shared/Loader.jsx";
import {Helmet} from "react-helmet-async";
import Header from "../../components/RoomDetails/Header.jsx";
import RoomInfo from "../../components/RoomDetails/RoomInfo.jsx";
import RoomReservation from "../../components/RoomDetails/RoomReservation.jsx";

const RoomDetails = () => {
    const {id} = useParams()
    let [room, setRoom] = useState({})
    let [loading, setLoading] = useState(false)
    // console.log(room)
    useEffect(() => {
        setLoading(true)
        fetch("https://raw.githubusercontent.com/shakilahmedatik/b9-stayVista-starter-template/main/client/public/rooms.json")
        // fetch('/rooms.json')
            .then(resp => resp.json())
            .then(data => {
                let singleRoom = data.find(room => room._id === id);
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id]);
    if (loading) return <Loader/>

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            {/*  other coding  */}
            <div className="md:max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <Header room={room}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 mt-6 md:gap-10">
                    <RoomInfo room={room}/>
                    <div className="md:col-span-3 order-first md:order-last mb-10">
                        <RoomReservation room={room}/>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default RoomDetails;