import React from 'react';
import { Spinner, SpinnerSize, Stack, IStackStyles, ISpinnerStyles } from '@fluentui/react';
import './Loader.css';

const spinnerStyles: ISpinnerStyles = {
    circle: {
        borderColor: 'white',
    },
    label: {
        color: 'white',
    },
};

const Loader: React.FC = () => {
    return (
        <div className="loader-overlay">
            <Stack horizontalAlign="center" verticalAlign="center" verticalFill>
                <Spinner size={SpinnerSize.large} label="Loading..." styles={spinnerStyles} />
            </Stack>
        </div>
    );
};

export default Loader;