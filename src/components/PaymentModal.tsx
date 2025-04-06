import React, { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
  price: number;
  onPaymentComplete: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  productTitle,
  price,
  onPaymentComplete
}) => {
  const [paymentStep, setPaymentStep] = useState<'details' | 'processing' | 'complete'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'qr'>('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    address: '',
    email: ''
  });

  // Demo QR code URL (in a real app, this would be generated dynamically)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=demo-payment-${productTitle}-${price}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || '';
      if (formattedValue.length > 19) return; // 16 digits + 3 spaces
    }

    // Format expiry date
    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').match(/.{1,2}/g)?.join('/') || '';
      if (formattedValue.length > 5) return; // MM/YY format
    }

    // Limit CVV to 3 digits
    if (name === 'cvv' && value.length > 3) return;

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStep('complete');
      // Simulate successful payment after 2 seconds
      setTimeout(() => {
        onPaymentComplete();
        onClose();
      }, 2000);
    }, 2000);
  };

  const handleQRPayment = () => {
    setPaymentStep('processing');
    // Simulate QR code payment processing
    setTimeout(() => {
      setPaymentStep('complete');
      setTimeout(() => {
        onPaymentComplete();
        onClose();
      }, 2000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        {paymentStep === 'details' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#46392d]">Payment Details</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#46392d]">{productTitle}</h3>
              <p className="text-2xl font-bold text-[#46392d]">${price.toFixed(2)}</p>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  paymentMethod === 'card'
                    ? 'bg-[#46392d] text-white'
                    : 'bg-gray-100 text-[#46392d] hover:bg-gray-200'
                }`}
              >
                Pay with Card
              </button>
              <button
                onClick={() => setPaymentMethod('qr')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  paymentMethod === 'qr'
                    ? 'bg-[#46392d] text-white'
                    : 'bg-gray-100 text-[#46392d] hover:bg-gray-200'
                }`}
              >
                Pay with QR
              </button>
            </div>

            {paymentMethod === 'card' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St, City, Country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#46392d] text-white py-2 px-4 rounded-md hover:bg-[#5c4b3d] transition-colors"
                >
                  Pay ${price.toFixed(2)}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src={qrCodeUrl}
                      alt="Payment QR Code"
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Scan this QR code with your mobile payment app to complete the purchase
                  </p>
                  <button
                    onClick={handleQRPayment}
                    className="bg-[#46392d] text-white py-2 px-4 rounded-md hover:bg-[#5c4b3d] transition-colors"
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {paymentStep === 'processing' && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#46392d] mx-auto mb-4"></div>
            <p className="text-lg font-medium text-[#46392d]">Processing your payment...</p>
            <p className="text-sm text-gray-500">Please don't close this window</p>
          </div>
        )}

        {paymentStep === 'complete' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#46392d] mb-2">Payment Successful!</h3>
            <p className="text-sm text-gray-500">Thank you for your purchase</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal; 