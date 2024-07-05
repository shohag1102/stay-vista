import DatePicker from "./DatePicker.jsx";
import Button from "../Button/Button.jsx";
import {differenceInDays, formatDistance} from "date-fns";
import {useState} from "react";

const RoomReservation = ({room}) => {

    const totalDays = formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
    // const totalDays = differenceInDays(new Date(room.to), new Date(room.from))
    // calculate total price
    const totalPrice = Number(totalDays) * room?.price;
    // console.log('total price and day is ', totalPrice, totalDays)

    const [value, setValue] = useState(
        {
            startDate: new Date(room?.from),
            endDate: new Date(room?.to),
            key: 'selection'
        }
    );
    return (
        <div className={"rounded-xl border-[1px] border-neutral-200 bg-white overflow-hidden"}>
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    $ {room?.price}
                </div>
                <div className="font-light text-neutral-600">
                    night
                </div>
            </div>
            <hr/>
            <div className="flex justify-center">
                <DatePicker value={value}/>
            </div>
            <hr/>
            <div className="p-4">
                <Button label={'Reserve'}/>
            </div>
            <hr/>
            <div className="p-4 flex items-center justify-between font-semibold">
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
        </div>
    );
};

export default RoomReservation;