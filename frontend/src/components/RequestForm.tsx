'use client';

import { useState } from 'react';
import Button from './Button';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Отправка...');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    if (file) {
      data.append('file', file);
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/order`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('Ваша заявка успешно отправлена!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById('file') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setStatus('Произошла ошибка при отправке.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Произошла ошибка сети.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Запросить расчет</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Ваше имя</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Телефон</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Опишите ваш заказ</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-3 py-2 border rounded-md"></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="file" className="block text-gray-700 font-semibold mb-2">Прикрепите макет (PDF, AI, CDR, TIFF)</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100" />
      </div>

      <div className="text-center">
        <Button type="submit" size="lg">Отправить заявку</Button>
      </div>

      {status && <p className="mt-4 text-center text-green-600">{status}</p>}
    </form>
  );
};

export default RequestForm;
