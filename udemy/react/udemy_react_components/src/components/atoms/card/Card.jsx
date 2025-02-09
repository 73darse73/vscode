import PropTypes from "prop-types";
import styled from "styled-components"

export const Card = (props) => {
    const { id, name, src } = props;
    return(
        <SCard>
            <SImg src={src} alt={name} />
            <SName>{name}</SName>
        </SCard>
    )
}

Card.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
}

const SCard = styled.div`
    background-color: light-blue;
`;
const SImg = styled.img`
    
`;
const SName = styled.p`
    
`;