const Faq = () => {
  return (
    <div>
      <h3 className="text-5xl font-bold text-center">FAQ</h3>{" "}
      <hr className="border-4 mt-4 border-double border-black w-40 mx-auto" />
      <div className="md:flex gap-5 my-10">
        <div className="md:w-1/2">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked />
            <div className="collapse-title text-xl font-medium">
              How do I place an order on your website?
            </div>
            <div className="collapse-content">
              <p>
                To place an order, simply browse our product listings, select
                your desired item, and click Add to Cart. Once you have added
                all the items you want, proceed to the checkout page to complete
                your purchase.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept a variety of payment methods, including credit cards,
                debit cards, PayPal, and more. You can choose the payment option
                that suits you best during checkout.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I track my order's shipping status?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can track the shipping status of your order. After your
                purchase, we'll provide you with a tracking number and a link to
                monitor the delivery progress.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is there a warranty on your products?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Many of our products come with a manufacturer's warranty. You
                can find warranty information in the product descriptions.
                Additionally, we offer a return policy for your peace of mind.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you offer customer support for technical issues with products?
            </div>
            <div className="collapse-content">
              <p>
                Yes, our dedicated customer support team is here to assist you
                with any technical issues you may encounter with your purchased
                products. Feel free to reach out for help and guidance.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I stay updated on your latest deals and promotions?
            </div>
            <div className="collapse-content">
              <p>
                To stay informed about our latest deals and promotions, be sure
                to subscribe to our newsletter and follow us on social media.
                You'll be the first to know about exciting offers and new
                arrivals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
