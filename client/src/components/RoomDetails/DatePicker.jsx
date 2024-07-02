import {DateRange} from 'react-date-range';

const DatePicker = ({value, handleSelect}) => {
    return (
        <DateRange
            rangeColors={["#F43F5E"]}
            editableDateInputs={true}
            direction = 'vertical'
            // onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            // ranges={[value]}
            showDateDisplay = {false}
        />
    );
};

export default DatePicker;