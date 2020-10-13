import React from 'react';
import BrandsMenuItem from '../menu-item/brands-menu-item.component';
import './brands-directory.styles.scss';

class BrandsDirectory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'Charnos',
                  imageUrl: 'https://iwanttights.com/media/mgs_brand/c/h/charnos.jpg',
                  
                  id: 25,
                  linkUrl: 'shop/charnos'
                },
                {
                  title: 'stockings collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-027a.png',
                  
                  id: 2,
                  linkUrl: 'shop/stockings'
                },
                {
                  title: 'hold ups collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-037_1.png',
                  
                  id: 3,
                  linkUrl: 'shop/hold-ups'
                },
                {
                  title: 'retro knickers & more',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-047a_1.png',
                  
                  id: 4,
                  linkUrl: 'shop/lingerie'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 5,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 6,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 7,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 8,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 9,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 10,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 11,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 12,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 13,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 14,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 15,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 16,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 17,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 18,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 19,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  
                  id: 20,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'body stockings & more',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-067.png',
                  id: 21,
                  linkUrl: 'shop/body-stockings'
                },
                {
                  title: 'body stockings & more',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-067.png',
                  id: 22,
                  linkUrl: 'shop/body-stockings'
                },
                {
                  title: 'body stockings & more',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-067.png',
                  id: 23,
                  linkUrl: 'shop/body-stockings'
                },
                {
                  title: 'body stockings & more',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-067.png',
                  id: 24,
                  linkUrl: 'shop/body-stockings'
                }
              ] 
    }
}

render(){
    return (
        <div className='brands-directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <BrandsMenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
}
}

export default BrandsDirectory;