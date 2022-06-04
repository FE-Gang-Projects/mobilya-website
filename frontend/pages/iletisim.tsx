import { Container, SimpleLayout } from '../components';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Lütfen formdaki zorunlu alanları doldurunuz!');
      return;
    }
    axios
      .post(`${BASE_URL}/iletisims`, {
        data: {
          isim: form.name,
          mesaj: form.message,
          telefon: form.phone,
          mail: form.email,
        },
      })
      .then(() => toast.success('Mesaj başarıyla gönderildi!'))
      .catch((err) => {
        if (err.response.status === 400) toast.error('Lütfen geçerli bir mail adresi giriniz!');
        else toast.error('Mesaj gönderilemedi!');
      });
  };

  return (
    <Container>
      <SimpleLayout
        title="İletişim"
        text=" Belediye Sk. No:3
        Gazi Süleyman Paşa, Belediye Sk. No:3, 17800 Lapseki/Çanakkale">
        <div className="vl"></div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-input-container">
            <label htmlFor="name">İsminiz*</label>
            <input
              id="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Lütfen tam adınızı giriniz (Zorunlu)."
              type="text"
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="mail">Mail Adresi*</label>
            <input
              id="mail"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Lütfen mail adresinizi giriniz (Zorunlu)."
              type="text"
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Lütfen telefon numarınızı giriniz."
              type="text"
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="message">Mesaj*</label>
            <textarea
              id="message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Lütfen mesajınızı giriniz (Zorunlu)."></textarea>
          </div>
          <button type="submit">
            Mesaj Gönder <Image width={20} height={20} src="/icons/mail-icon.png" />
          </button>
        </form>
      </SimpleLayout>
    </Container>
  );
};

export default Contact;
