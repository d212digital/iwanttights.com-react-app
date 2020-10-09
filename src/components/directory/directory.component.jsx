import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'tights collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-037b.png',
                  size: 'large',
                  id: 1,
                  linkUrl: 'shop/tights'
                },
                {
                  title: 'stockings colleciton',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-027a.png',
                  size: 'large',
                  id: 2,
                  linkUrl: 'shop/stockings'
                },
                {
                  title: 'hold ups collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-037_1.png',
                  size: 'large',
                  id: 3,
                  linkUrl: 'shop/hold-ups'
                },
                {
                  title: 'retro knickers & more',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-047a_1.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/lingerie'
                },
                {
                  title: 'suspender belt collection',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-057.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'body stockings & more',
                  imageUrl: 'https://iwanttights.com/media/promobanners//h/o/home-067.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/body-stockings'
                }
              ] 
    }
}

render(){
    return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
}
}

export default Directory;