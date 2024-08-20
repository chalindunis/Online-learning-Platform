import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import ShowInstructors from './All/ShowInstructors';

const Instructors = () => {
    useTitle('Instructors | Online Learning - Unleashed Your Knowledge');
    return (
        <section>
            <ShowInstructors />
        </section>
    );
};

export default Instructors;