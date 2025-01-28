
import { Button } from '@/components/ui';
import PropTypes from 'prop-types';

const CardsMentor = ({setOpen}) => {
    return (
        <div className="w-full h-full absolute">
            <Button onClick={() => setOpen(true)}>Open Filter</Button>
            Cards
        </div>
    );
};

CardsMentor.propTypes = {
    setOpen: PropTypes.func
};

export default CardsMentor;