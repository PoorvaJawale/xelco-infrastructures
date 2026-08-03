import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const productOptions = [
  { label: 'Residential (B2C)', value: 'residential' },
  { label: 'Commercial (B2B)', value: 'commercial' },
  { label: 'Municipal (B2G)', value: 'municipal' },
  { label: 'General enquiry', value: 'general' },
];

const enquiryOptions = [
  { label: 'Demo request', value: 'demo' },
  { label: 'Pricing', value: 'pricing' },
  { label: 'Partnership', value: 'partnership' },
  { label: 'Technical support', value: 'support' },
];

const specByProduct: Record<string, { label: string; href: string }> = {
  residential: { label: 'Read the Residential Smart Bin spec while you wait', href: '/products/residential' },
  commercial: { label: 'Read the Commercial Smart Bin spec while you wait', href: '/products/commercial' },
  municipal: { label: 'Read the Municipal Smart Bin spec while you wait', href: '/products/municipal' },
  general: { label: 'Browse the full product range while you wait', href: '/products' },
};

const routingNote: Record<string, string> = {
  residential: 'Residential enquiries go to the housing societies team.',
  commercial: 'Commercial enquiries go to the facilities team.',
  municipal: 'Municipal enquiries go to the pilot deployment team.',
  general: 'We will route your enquiry to the right team.',
};

export default function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    product: 'municipal',
    enquiry: '',
    message: '',
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.message.trim()) {
      setMessageError(true);
      return;
    }
    setMessageError(false);
    setSubmitted(true);
  };

  const spec = specByProduct[form.product] ?? specByProduct.general;

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-8 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* --- Left: heading + details --- */}
          <div className="lg:col-span-4">
            <h1 className="text-4xl md:text-[2.75rem] font-bold text-dark font-display tracking-tight leading-[1.12] mb-3">
              Get in touch
            </h1>
            <p className="text-[15px] text-dark-secondary mb-10">Replies within one business day.</p>

            <div className="border-t-2 border-dark">
              <div className="py-4 border-b border-gray-200">
                <div className="text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold mb-1.5">Email</div>
                <a href="mailto:info@xelcoinfratech.com" className="text-[15px] text-primary-hover hover:text-dark transition-colors">
                  info@xelcoinfratech.com
                </a>
              </div>

              <div className="py-4 border-b border-gray-200">
                <div className="text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold mb-1.5">Phone</div>
                <a href="tel:+919619773835" className="text-[15px] text-primary-hover hover:text-dark transition-colors">
                  +91 96197 73835
                </a>
              </div>

              <div className="py-4 border-b border-gray-200">
                <div className="text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold mb-1.5">Headquarters</div>
                <p className="text-[15px] text-dark leading-relaxed">
                  XelCo Group H.Q, BKC<br />
                  Bandra, Mumbai<br />
                  Maharashtra, India 400051
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <div className="text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold mb-1.5">Hours</div>
                <p className="text-[15px] text-dark">Mon&ndash;Fri, 8:00&ndash;18:00 IST</p>
              </div>
            </div>
          </div>

          {/* --- Right: form / success --- */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="bg-white border border-gray-200 border-l-[3px] border-l-primary p-8">
                <h2 className="text-xl font-bold text-dark mb-3 font-display tracking-tight">Message received</h2>
                <p className="text-[15px] text-dark-secondary leading-relaxed mb-5 max-w-lg">
                  We will reply to{' '}
                  <span className="text-dark font-semibold">{form.email || 'your address'}</span>{' '}
                  within one business day. {routingNote[form.product] ?? routingNote.general}
                </p>
                <button
                  onClick={() => navigate(spec.href)}
                  className="text-sm text-primary-hover font-semibold flex items-center gap-1.5 hover:text-dark transition-colors"
                >
                  {spec.label} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold pb-3 mb-6 border-b border-gray-200">
                  About you
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <Input label="Full name" placeholder="Jane Doe" value={form.name} onChange={set('name')} required />
                  <Input
                    label="Work email"
                    type="email"
                    placeholder="jane@metrocity.gov"
                    value={form.email}
                    onChange={set('email')}
                    required
                  />
                </div>

                <div className="mb-8">
                  <Input
                    label={
                      <>
                        Organisation <span className="text-gray-400 font-normal">(optional)</span>
                      </>
                    }
                    placeholder="Company or department"
                    value={form.organisation}
                    onChange={set('organisation')}
                  />
                </div>

                <div className="text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold pb-3 mb-6 border-b border-gray-200">
                  Your enquiry
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <Select
                    label="Product interest"
                    options={productOptions}
                    value={form.product}
                    onChange={set('product')}
                    required
                  />
                  <Select
                    label="Enquiry type"
                    placeholder="Select one"
                    options={enquiryOptions}
                    value={form.enquiry}
                    onChange={set('enquiry')}
                  />
                </div>

                <div className="mb-6">
                  <Textarea
                    label="What do you need?"
                    placeholder="Scale, sites, timeline"
                    className="min-h-[120px]"
                    value={form.message}
                    onChange={set('message')}
                    aria-invalid={messageError}
                    error={messageError ? ' ' : undefined}
                  />
                  <p className={`text-xs mt-1.5 leading-relaxed ${messageError ? 'text-red-600' : 'text-gray-400'}`}>
                    Tell us roughly how many bins and where. It routes your enquiry to the right team.
                  </p>
                </div>

                <label className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-200 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary shrink-0" />
                  <span className="text-sm text-dark-secondary">
                    Send me product updates. No more than once a month.
                  </span>
                </label>

                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <Button type="submit" className="px-8 py-5 text-sm font-semibold shrink-0">
                    Send message
                  </Button>
                  <span className="text-sm text-gray-400">We never share your details.</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
