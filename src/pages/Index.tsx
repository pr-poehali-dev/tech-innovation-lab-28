export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ATELIER FORM
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Коллекции
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О студии
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ВАШ
              <br />
              КРОЙ
            </h1>
            <p className="text-xl max-w-xl">
              Индивидуальный пошив по вашим меркам. Мы создаём одежду, которая повторяет линии вашего тела и характера — точно, чисто, по фигуре.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/db656dab-a920-477d-8485-ca59572e10e2/files/5001bdb4-a5b7-48e8-b029-5eddfcf24906.jpg"
                alt="Пошив на заказ"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">КОЛЛЕКЦИИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/db656dab-a920-477d-8485-ca59572e10e2/files/5001bdb4-a5b7-48e8-b029-5eddfcf24906.jpg"
                  alt="Пальто на заказ"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Пальто «Линия»</h3>
              <p className="text-neutral-400">Шерстяное пальто прямого кроя, сшитое по индивидуальным меркам</p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/db656dab-a920-477d-8485-ca59572e10e2/files/0e6fdcfe-f68a-4ee4-9f00-ccbcbf4261c2.jpg"
                  alt="Платье на заказ"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Платье «Форма»</h3>
              <p className="text-neutral-400">Вечернее платье минималистичного силуэта из премиальной ткани</p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/db656dab-a920-477d-8485-ca59572e10e2/files/609d5c5b-31a1-4073-b960-6e1df048c014.jpg"
                  alt="Костюм на заказ"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Костюм «Структура»</h3>
              <p className="text-neutral-400">Деловой костюм ручной работы с идеальной посадкой по фигуре</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О СТУДИИ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/db656dab-a920-477d-8485-ca59572e10e2/files/609d5c5b-31a1-4073-b960-6e1df048c014.jpg"
                  alt="Студия пошива"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                ATELIER FORM — студия персональной одежды, где каждая вещь создаётся под конкретного человека. Мы верим, что идеальная посадка — это не роскошь, а основа стиля.
              </p>
              <p className="mb-6">
                Наш подход основан на ручном крое, точных мерках и работе с премиальными тканями. Мы создаём одежду минималистичных силуэтов, которая подчёркивает индивидуальность и служит годами.
              </p>
              <p className="mb-6">
                Студию основали портные, убеждённые, что форма следует за фигурой. Мы шьём для тех, кто ценит чистые линии, качество и вещи, сделанные именно для них.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Индивидуальные мерки</li>
                    <li>Ручной крой</li>
                    <li>Премиальные ткани</li>
                    <li>Чистые силуэты</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Услуги</h3>
                  <ul className="space-y-2">
                    <li>Пошив на заказ</li>
                    <li>Капсульный гардероб</li>
                    <li>Подбор тканей</li>
                    <li>Подгонка по фигуре</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Хотите вещь, сшитую именно для вас? Запишитесь на консультацию и снятие мерок.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@atelierform.ru" className="hover:underline">
                    hello@atelierform.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Студия</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Записаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2025 ATELIER FORM. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Pinterest
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}