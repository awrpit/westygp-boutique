import React, { useCallback, useEffect, useState } from 'react';
import OrderSummaryItem from './OrderSummaryItem';

export default ({ items, discount, addOns, deliveryCharge }) => {
  const [grandTotal, setGrandTotal] = useState(0);
  const [addOnsTotal, setAddOnsTotal] = useState(0);
  const [requirements, setRequirements] = useState('');

  const calculateGrandTotal = useCallback(() => {
    let total = 0;

    for (let item of items) {
      total += item.cost;
    }

    for (let addOn of addOns) {
      total += addOn.cost;
    }

    total += deliveryCharge;

    total -= discount;

    setGrandTotal(total);
  }, [items, discount, addOns, deliveryCharge]);

  const calculateAddOnsTotal = useCallback(() => {
    let total = 0;

    for (let addOn of addOns) {
      total += addOn.cost;
    }

    setAddOnsTotal(total);
  }, [addOns]);

  useEffect(() => {
    calculateGrandTotal();
    calculateAddOnsTotal();
  }, [calculateAddOnsTotal, calculateGrandTotal]);

  return (
    <React.Fragment>
      <div class="order-summary">
        <h2 class="w-100 text-center mb-4">Order Summary</h2>
        <h4>Price</h4>
        <table>
          <tbody>
            {items.map((item) => (
              <OrderSummaryItem label={item.label} cost={item.cost} />
            ))}
            <OrderSummaryItem label="Discount" cost={discount} />
            <OrderSummaryItem label="Add Ons" cost={addOnsTotal} />
            <OrderSummaryItem label="Delivery Charge" cost={deliveryCharge} />
          </tbody>
        </table>

        <form action="" method="post">
          <div class="form-group">
            <textarea
              name=""
              id=""
              rows="3"
              placeholder="If you have any other requirements to be included, Please type in here"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            ></textarea>
          </div>
        </form>
        <table>
          <tbody>
            <tr>
              <td>
                <h1> GRAND TOTAL :</h1>
              </td>
              <td>
                <h1>Rs. {grandTotal}/-</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="checkout-add-more">
        <a href="" class="black-btn">
          CHECKOUT
        </a>
        <a href="" class="black-btn">
          ADD MORE
        </a>
      </div>
    </React.Fragment>
  );
};
