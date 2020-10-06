import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'tights',
                  imageUrl: 'https://iwanttights.com/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/c/a/cahp.jpg',
                  size: 'large',
                  id: 1,
                  linkUrl: 'shop/tights'
                },
                {
                  title: 'stockings',
                  imageUrl: 'https://iwanttights.com/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/s/t/st3304.jpg',
                  size: 'large',
                  id: 2,
                  linkUrl: 'shop/stockings'
                },
                {
                  title: 'hold ups',
                  imageUrl: 'https://iwanttights.com/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/6/6/6672_2.jpg',
                  size: 'large',
                  id: 3,
                  linkUrl: 'shop/hold-ups'
                },
                {
                  title: 'suspender belts',
                  imageUrl: 'https://iwanttights.com/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/r/b/rbs1.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/suspender-belts'
                },
                {
                  title: 'retro lingerie & more',
                  imageUrl: 'https://iwanttights.com/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/r/o/rozamehthoclrt.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/lingerie'
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