import React from 'react';
import { ServiceParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function ServiceParagraphText({ children, ...props }) {
    return <ServiceParagraphTextStyles {...props}>{children}</ServiceParagraphTextStyles>;
}

export default ServiceParagraphText;