import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id)


  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add to Cart
            </Button>
          ) : (
            <div className="d-flex flex-column ">
              <div className="d-flex justify-content-center align-items-center ">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>

                <span>{quantity} in the Cart</span>

                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <Button onClick={() => removeFromCart(id)} variant="danger">
                  remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
