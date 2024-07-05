import axiosSecure from "."

export const getAllRooms = async () => {
    const {data} = await axiosSecure('/rooms')

    return data;
}

export const getRoom = async room => {
    const {data} = await axiosSecure(`/room/${room}`)
    return data
}