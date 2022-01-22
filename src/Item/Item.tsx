import Button from '@material-ui/core/Button';

import { CartItemType } from '../App';

import { Wrapper } from './Item.styles'

type Props = {
    item: CartItemType;
    AddToCartHandler: (clickedItem: CartItemType) => void;

} 

const Item : React.FC<Props> = ({ item , AddToCartHandler}) => (
 <Wrapper>
     <img src={item.image} alt={item.title} />
     <div>
         <h3>{item.title}</h3>
         <p>{item.description}</p>
         <h3>{item.price}$</h3>
     </div>
     <Button onClick={() => AddToCartHandler(item)}>Add to cart</Button>
 </Wrapper>

);

export default Item;