import React, { useState } from 'react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    dietaryRequirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã xác nhận tham dự!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-32 bg-primary-red relative overflow-hidden" id="rsvp">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined absolute top-10 left-10 text-9xl text-gold-bright">cloud</span>
        <span className="material-symbols-outlined absolute bottom-10 right-10 text-9xl text-gold-bright">cloud</span>
      </div>
      <div className="max-w-[750px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-5xl md:text-6xl text-gold-bright mb-6 gold-gradient-text">Xác Nhận Tham Dự</h2>
          <p className="text-gold-shimmer/80 text-lg">Hân hạnh được đón tiếp Quý khách. Vui lòng xác nhận trước ngày 15/01/2026.</p>
        </div>
        <form className="space-y-8 bg-deep-red/50 p-10 rounded-3xl border border-gold/30 backdrop-blur-xl" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-gold-bright text-xs font-black uppercase tracking-[0.2em] ml-1">Họ và Tên</label>
              <input 
                className="w-full bg-primary-red/30 border-2 border-gold/30 rounded-xl px-5 py-4 text-ivory focus:border-gold-bright focus:ring-0 placeholder:text-ivory/20 transition-all text-lg" 
                placeholder="Nguyễn Văn A" 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-gold-bright text-xs font-black uppercase tracking-[0.2em] ml-1">Phòng Ban</label>
              <input 
                className="w-full bg-primary-red/30 border-2 border-gold/30 rounded-xl px-5 py-4 text-ivory focus:border-gold-bright focus:ring-0 placeholder:text-ivory/20 transition-all text-lg" 
                placeholder="Phòng Marketing" 
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-gold-bright text-xs font-black uppercase tracking-[0.2em] ml-1">Yêu cầu ăn uống (nếu có)</label>
            <textarea 
              className="w-full bg-primary-red/30 border-2 border-gold/30 rounded-xl px-5 py-4 text-ivory focus:border-gold-bright focus:ring-0 placeholder:text-ivory/20 transition-all text-lg" 
              placeholder="Ăn chay, dị ứng hải sản..." 
              rows="4"
              name="dietaryRequirements"
              value={formData.dietaryRequirements}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="pt-6">
            <button 
              className="w-full gold-button font-black py-5 rounded-xl text-xl transition-all transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.4)] uppercase tracking-[0.3em]" 
              type="submit"
            >
              Xác Nhận Ngay
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
