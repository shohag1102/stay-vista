import {DateRange} from 'react-date-range';

const DatePicker = ({value}) => {
    return (
        <DateRange
            rangeColors={["#F43F5E"]}
            direction = 'vertical'
            showDateDisplay = {false}
            ranges={[value]}
        />
    );
};

export default DatePicker;