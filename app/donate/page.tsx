"use client";

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const amounts = [10000, 25000, 50000, 100000, 250000];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom' | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mtn' | 'airtel' | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const finalAmount = selectedAmount === 'custom' ? customAmount : selectedAmount;
  const isFormValid = finalAmount && Number(finalAmount) > 0 && name && email && paymentMethod;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <>
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[240px] px-4 md:px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">Support Our Work</h1>
          <p className="text-white/80 text-[18px]">
            Every contribution reaches women and girls in Northern Uganda directly.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-12 md:py-16 -mt-16 z-10 relative">
        <div className="max-w-[480px] mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 bg-green-tint rounded-full flex items-center justify-center mb-6 text-brand-green">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="text-[24px] font-bold text-brand-brown mb-2">Thank you, {name}!</h2>
              <p className="text-gray-600 leading-[1.6]">
                Your donation of <strong className="text-[#111111]">{finalAmount?.toLocaleString()} UGX</strong> has been received. We will send a confirmation to <strong className="text-[#111111]">{email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
              
              {/* Amount Selection */}
              <div>
                <h3 className="text-[16px] font-semibold text-brand-brown mb-3">Select Amount (UGX) <span className="text-brand-orange">*</span></h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedAmount(amt)}
                      className={`py-3 px-2 text-center rounded-xl border transition-all duration-200 font-medium text-[15px] ${
                        selectedAmount === amt 
                          ? 'border-brand-orange bg-orange-tint text-brand-orange shadow-sm' 
                          : 'border-gray-200 text-gray-600 hover:border-brand-orange/50 hover:bg-gray-50'
                      }`}
                    >
                      {amt.toLocaleString()}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedAmount('custom')}
                    className={`py-3 px-2 text-center rounded-xl border transition-all duration-200 font-medium text-[15px] ${
                      selectedAmount === 'custom' 
                        ? 'border-brand-orange bg-orange-tint text-brand-orange shadow-sm' 
                        : 'border-gray-200 text-gray-600 hover:border-brand-orange/50 hover:bg-gray-50'
                    }`}
                  >
                    Custom
                  </button>
                </div>
                {selectedAmount === 'custom' && (
                  <div className="mt-4">
                    <Input 
                      label="Custom Amount (UGX)"
                      type="number"
                      min="1000"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Donor Info */}
              <div className="space-y-4">
                <h3 className="text-[16px] font-semibold text-brand-brown mb-1">Your Information</h3>
                <Input 
                  label="Full Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                />
                <Input 
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  required
                />
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-[16px] font-semibold text-brand-brown mb-3">Payment Method <span className="text-brand-orange">*</span></h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mtn')}
                    className={`relative p-4 rounded-xl border text-left transition-all duration-200 ${
                      paymentMethod === 'mtn' ? 'border-brand-orange ring-1 ring-brand-orange bg-orange-tint/20' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FFCC00] mb-2" />
                    <div className="font-semibold text-brand-brown text-sm">MTN Mobile Money</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('airtel')}
                    className={`relative p-4 rounded-xl border text-left transition-all duration-200 ${
                      paymentMethod === 'airtel' ? 'border-brand-orange ring-1 ring-brand-orange bg-orange-tint/20' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FF0000] mb-2" />
                    <div className="font-semibold text-brand-brown text-sm">Airtel Money</div>
                  </button>
                </div>
                {paymentMethod === 'mtn' && (
                  <p className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    You will receive a prompt on your MTN phone to enter your PIN to confirm the payment.
                  </p>
                )}
                {paymentMethod === 'airtel' && (
                  <p className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    You will receive a prompt on your Airtel phone to enter your PIN to confirm the payment.
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="large" 
                className="w-full"
                disabled={!isFormValid || status === 'loading'}
                isLoading={status === 'loading'}
              >
                Donate Now
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="section-wrapper bg-green-tint">
        <div className="content-container max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-8">Where Your Money Goes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl flex items-start">
              <div className="w-10 h-10 rounded-full bg-green-tint text-brand-green flex items-center justify-center shrink-0 mr-4 font-bold">1</div>
              <div>
                <h4 className="font-semibold text-brand-brown mb-1">Maternal Health Supplies</h4>
                <p className="text-sm text-gray-600">Providing clean delivery kits and essential antenatal supplements for safe motherhood.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl flex items-start">
              <div className="w-10 h-10 rounded-full bg-green-tint text-brand-green flex items-center justify-center shrink-0 mr-4 font-bold">2</div>
              <div>
                <h4 className="font-semibold text-brand-brown mb-1">Community Outreach</h4>
                <p className="text-sm text-gray-600">Funding transportation and medical supplies for rural health camps like the Patiko outreach.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl flex items-start">
              <div className="w-10 h-10 rounded-full bg-green-tint text-brand-green flex items-center justify-center shrink-0 mr-4 font-bold">3</div>
              <div>
                <h4 className="font-semibold text-brand-brown mb-1">Empowering Girls</h4>
                <p className="text-sm text-gray-600">Distributing reusable sanitary pads to keep vulnerable girls in school during their menstruation.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl flex items-start">
              <div className="w-10 h-10 rounded-full bg-green-tint text-brand-green flex items-center justify-center shrink-0 mr-4 font-bold">4</div>
              <div>
                <h4 className="font-semibold text-brand-brown mb-1">Mental Health Counseling</h4>
                <p className="text-sm text-gray-600">Facilitating trauma-informed care groups and professional counseling sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}