import React from 'react';
import {   MenuItemContainer, BackgroundImageContainer, ContentContainer,
    ContentTitle, ContentSubtitle } from './menu-item.styles';
import { withRouter } from 'react-router-dom';


const MenuItem = ({key, title,  imageUrl, size, history, linkUrl, match}) => (
<MenuItemContainer size={size} 
    onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
    <ContentContainer className='content'>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
</MenuItemContainer>)


export default withRouter(MenuItem);