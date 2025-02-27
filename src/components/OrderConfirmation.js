import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderConfirmation = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">订单确认</h1>
      <div className="mb-4" style={{ fontSize: '50px' }}>🎉</div>
      <p className="lead">恭喜你，下单成功！</p>
      <p>您的订单已成功提交，我们会尽快处理并发货。</p>
    </div>
  );
}

export default OrderConfirmation;
