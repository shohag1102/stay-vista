const Heading = ({title, subtitle, center}) => {
    return (
        <div className={`${center ? 'text-center' : 'text-start'}`}>
            <div className="text-2xl font-bold">{title}</div>
            <div className="font-light text-neutral-400 mt-2">{subtitle}</div>
        </div>
    );
};

export default Heading;