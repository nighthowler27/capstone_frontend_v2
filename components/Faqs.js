import React, { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCollapse = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="d-collapse">
      <h1 className="d-h1">Devengers Vault</h1>
      <h2 className="d-h2">Frequently Asked Questions</h2>

      <button className="collapsible" onClick={() => handleCollapse(1)}>
        1. How can I place an order?
      </button>
      <div
        className={`d-content ${activeIndex === 1 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 1 ? '100%' : 0 }}
      >
        <p className="d-paragraph">To place an order, follow these simple steps:</p>
        <ol>
          <li>Visit our website and browse through our collection of toys.</li>
          <li>Select the desired items and add them to your shopping cart.</li>
          <li>Proceed to the checkout page and provide the necessary shipping and payment information.</li>
          <li>Review your order details and confirm the purchase.</li>
          <li>Once the order is placed successfully, you will receive an order confirmation email.</li>
        </ol>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(2)}>
        2. What payment methods do you accept?
      </button>
      <div
        className={`d-content ${activeIndex === 2 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 2 ? '100%' : 0 }}
      >
        <p className="d-paragraph">We accept the following payment methods:</p>
        <ul>
          <li>Credit cards (Visa, Mastercard, American Express)</li>
          <li>Debit cards</li>
          <li>Gcash</li>
          <li>Bank transfers</li>
        </ul>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(3)}>
        3. How long will it take to receive my order?
      </button>
      <div
        className={`d-content ${activeIndex === 3 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 3 ? '100%' : 0 }}
      >
        <p className="d-paragraph">The delivery time depends on various factors, including your location and the shipping method chosen. Generally, orders are processed within 1-2 business days, and the estimated delivery time is as follows:</p>
        <ul>
          <li>Standard Shipping: 5-7 business days</li>
          <li>Express Shipping: 2-3 business days</li>
          <li>International Shipping: 7-14 business days</li>
        </ul>
      </div>

      
      <button className="collapsible" onClick={() => handleCollapse(4)}>
        4. What is your return and refund policy?
      </button>
      <div
        className={`d-content ${activeIndex === 4 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 4 ? '100%' : 0 }}
      >
        <p className="d-paragraph">We have a hassle-free return and refund policy. If you are not satisfied with your purchase, you can return the item(s) within 30 days of delivery for a full refund. Please make sure the returned items are in their original condition and packaging.</p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(5)}>
        5. Do you offer international shipping?
      </button>
      <div
        className={`d-content ${activeIndex === 5 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 5 ? '100%' : 0 }}
      >
        <p className="d-paragraph">International shipping is currently not available as of the moment. We apologize for any inconvenience this may cause. Our shipping services are currently limited to domestic locations only. We are working diligently to expand our shipping capabilities and hope to offer international shipping in the future. We appreciate your understanding and patience. For now, we can only serve customers within our domestic shipping zone. Thank you for considering our products.</p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(6)}>
        6. Can I track my order?
      </button>
      <div
        className={`d-content ${activeIndex === 6 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 6 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          Absolutely! Once your order is shipped, you will receive a shipping confirmation email containing a tracking number and instructions on how to track your package. You can use this tracking number on our website or the shipping carrier's website to get real-time updates on the status and location of your order.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(7)}>
        7. What if the item I want is out of stock?
      </button>
      <div
        className={`d-content ${activeIndex === 7 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 7 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          If an item you desire is currently out of stock, you can sign up for our back-in-stock notifications. Simply provide your email address on the product page, and we will notify you as soon as the item becomes available again. We strive to restock popular items as quickly as possible to ensure you can purchase your desired toys.
        </p>
      </div>


      <button className="collapsible" onClick={() => handleCollapse(8)}>
        8. Are there any discounts or promotions available?
      </button>
      <div
        className={`d-content ${activeIndex === 8 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 8 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          Devengers Vault frequently offers discounts and promotions to provide our customers with great deals on our toys. Keep an eye on our website and subscribe to our newsletter to stay updated on the latest offers, promotions, and exclusive discounts. Additionally, follow us on social media for surprise flash sales and special discounts.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(9)}>
        9. What if I have a problem with my order?
      </button>
      <div
        className={`d-content ${activeIndex === 9 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 9 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          If you encounter any issues with your order, we are here to help. Please reach out to our customer support team with your order details, and we will promptly assist you in resolving the problem. We strive to provide excellent customer service and ensure your satisfaction with every purchase.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(10)}>
        10. Do you have a rewards program?
      </button>
      <div
        className={`d-content ${activeIndex === 10 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 10 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          Yes, we have a rewards program called "Devengers Rewards." By creating an account and making purchases on our website, you can earn points that can be redeemed for discounts on future orders. The more you shop, the more rewards you earn! Visit our website to learn more about our rewards program and how to maximize your savings.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(11)}>
        11. Can I cancel my order?
      </button>
      <div
        className={`d-content ${activeIndex === 11 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 11 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          If you wish to cancel your order, please contact our customer support team as soon as possible. We will do our best to accommodate your request, but please note that if your order has already been shipped, cancellation may not be possible. In such cases, you can initiate a return once you receive the items and follow our return policy for a refund.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(12)}>
        12. Do you offer wholesale or bulk purchasing?
      </button>
      <div
        className={`d-content ${activeIndex === 12 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 12 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          Yes, we offer wholesale and bulk purchasing options for businesses, organizations, and individuals looking to buy toys in large quantities. Please contact our wholesale department through our website or email us at wholesale@devengersvault.com for more information on our wholesale pricing and requirements. Our wholesale team will be happy to assist you and provide further details on pricing, minimum order quantities, and any other inquiries you may have.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(13)}>
        13. Are your toys suitable for specific age ranges?
      </button>
      <div
        className={`d-content ${activeIndex === 13 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 13 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          Yes, our toys are designed with age appropriateness in mind. Each product listing on our website includes recommended age ranges to help you choose toys that are suitable for different developmental stages. We prioritize safety and ensure that our toys meet or exceed industry standards for specific age groups.
        </p>
      </div>


      <button className="collapsible" onClick={() => handleCollapse(14)}>
        14. Can I change or update my shipping address after placing an order?
      </button>
      <div
        className={`d-content ${activeIndex === 14 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 14 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          If you need to change or update your shipping address after placing an order, please contact our customer support team as soon as possible. We will do our best to accommodate your request, but please note that if your order has already been shipped, address changes may not be possible. It's important to double-check your shipping address before confirming your order.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(15)}>
        15. Do you have a physical store?
      </button>
      <div
        className={`d-content ${activeIndex === 15 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 15 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          Currently, Devengers Vault operates exclusively as an online store. We do not have a physical retail location. By operating online, we can reach customers worldwide and offer a wide selection of toys at competitive prices. Shopping online with us is convenient, and our customer support team is always available to assist you.
        </p>
      </div>

      <button className="collapsible" onClick={() => handleCollapse(16)}>
        16. Can I make changes or cancel my order after it has been placed?
      </button>
      <div
        className={`d-content ${activeIndex === 16 ? 'active' : ''}`}
        style={{ maxHeight: activeIndex === 16 ? '100%' : 0 }}
      >
        <p className="d-paragraph">
          If you need to make changes or cancel your order after it has been placed, please contact our customer support team immediately. We will do our best to accommodate your request, but please note that if your order has already been processed or shipped, changes or cancellation may not be possible. It's important to review your order carefully before finalizing it.
        </p>
      </div>

    </div>


  );
}
