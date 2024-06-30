import Container from "../../components/Shared/Container.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../../components/Shared/Loader.jsx";
import {Helmet} from "react-helmet-async";

const RoomDetails = () => {
    const {id} = useParams()
    let [room, setRoom] = useState({})
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("https://raw.githubusercontent.com/shakilahmedatik/b9-stayVista-starter-template/main/client/public/rooms.json")
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
            <div className="">
                <div className="flex flex-col gap-6">
                {/*    heading    */}
                </div>
                <div className="">
                {/*    room info   */}
                </div>
            {/*    calendar    */}
            </div>

        </Container>
    );
};

export default RoomDetails;