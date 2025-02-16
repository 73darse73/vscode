import PropTypes from "prop-types";
import styled from "styled-components"

export const Card = (props) => {
    const { name, src, isAdmin } = props;
    
    return(
        <SCard>
            <SImg src={src} alt={name} />
            <SName>{name}</SName>
            { isAdmin && <SEdit>編集</SEdit>}
        </SCard>
    )
}

Card.propTypes = {
    key: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    isAdmin: PropTypes.boolian
}

const SCard = styled.div`
    max-width: 300px;
    width: 90%;
    margin-inline: auto;
    background-color: lightBlue;
`;
const SImg = styled.img`
    max-width: 100%;
`;
const SName = styled.p`
    
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursol: pointer;
`;