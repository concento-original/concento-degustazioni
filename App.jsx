import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);

  // Mock data
  const wines = [
    { id: 1, name: "Chianti Classico Riserva", price: 25, image: "https://placehold.co/600x400?text=Chianti+Classico" },
    { id: 2, name: "Vernaccia di San Gimignano", price: 32, image: "https://placehold.co/600x400?text=Vernaccia" },
    { id: 3, name: "Brunello di Montalcino", price: 45, image: "https://placehold.co/600x400?text=Brunello" },
    { id: 4, name: "Vin Santo del Chianti", price: 38, image: "https://placehold.co/600x400?text=Vin+Santo" },
  ];

  const experiences = [
    { id: 1, title: "Degustazione a Firenze", location: "Centro Storico - Firenze", duration: "2 ore", price: 40, image: "https://placehold.co/600x400?text=Firenze+Tasting" },
    { id: 2, title: "Tour enologico a San Gimignano", location: "San Gimignano, Tuscany", duration: "Mezza giornata", price: 75, image: "https://placehold.co/600x400?text=San+Gimignano" },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-[#2F1B0A] text-[#3E270C] sticky top-0 z-50 shadow-lg"> 
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Concento Degustazioni</div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => setActiveTab('home')} className={`hover:text-[#8B4513] ${activeTab === 'home' ? 'text-[#8B4513]' : ''}`}>Home</button>
            <button onClick={() => setActiveTab('experiences')} className={`hover:text-[#8B4513] ${activeTab === 'experiences' ? 'text-[#8B4513]' : ''}`}>Esperienze</button>
            <button onClick={() => setActiveTab('shop')} className={`hover:text-[#8B4513] ${activeTab === 'shop' ? 'text-[#8B4513]' : ''}`}>Shop</button>
            <button onClick={() => setActiveTab('contact')} className={`hover:text-[#8B4513] ${activeTab === 'contact' ? 'text-[#8B4513]' : ''}`}>Contatti</button>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setActiveTab('cart')} 
              className="relative hover:text-[#8B4513] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B4513] text-xs w-5 h-5 rounded-full flex items-center justify-center text-white">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Tuscan+Wine+Country')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight max-w-2xl">
              Esplora il sapore autentico della Toscana
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl text-[#D2B48C]"> 
              Degustazioni uniche Firenze e tra i vigneti di San Gimignano
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActiveTab('experiences')}
                className="bg-[#8B4513] hover:bg-[#A0522D] text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Scopri le Esperienze
              </button>
              <button 
                onClick={() => setActiveTab('shop')}
                className="bg-white hover:bg-gray-100 text-[#8B4513] px-8 py-3 rounded-full font-semibold transition-all border border-white hover:border-gray-200"
              >
                Acquista i Nostri Vini
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Experiences Section */}
      {activeTab === 'experiences' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3E270C]">Le Nostre Esperienze</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {experiences.map(exp => (
                <div key={exp.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="h-64 overflow-hidden">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#3E270C]">{exp.title}</h3>
                    <p className="text-gray-600 mb-4">{exp.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#8B4513] font-semibold">{exp.duration}</span>
                      <span className="font-bold text-lg text-[#3E270C]">{exp.price}€</span>
                    </div>
                    <button 
                      onClick={() => setActiveTab('contact')}
                      className="mt-6 w-full bg-[#8B4513] hover:bg-[#A0522D] text-white py-2 rounded-md transition-colors"
                    >
                      Prenota Ora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shop Section */}
      {activeTab === 'shop' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3E270C]">Il Nostro Vino</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wines.map(wine => (
                <div key={wine.id} className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img src={wine.image} alt={wine.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-bold text-lg mb-2 text-[#3E270C]">{wine.name}</h3>
                    <p className="text-[#8B4513] font-semibold">{wine.price}€</p>
                  </div>
                  <div className="p-4 pt-0">
                    <button 
                      onClick={() => addToCart(wine)}
                      className="w-full bg-[#8B4513] hover:bg-[#A0522D] text-white py-2 rounded-md transition-colors"
                    >
                      Aggiungi al Carrello
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cart Modal */}
      {activeTab === 'cart' && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#3E270C]">Il Tuo Carrello</h2>
                <button onClick={() => setActiveTab('home')} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-6">Il carrello è vuoto</p>
                  <button 
                    onClick={() => setActiveTab('shop')}
                    className="bg-[#8B4513] hover:bg-[#A0522D] text-white px-6 py-3 rounded-full"
                  >
                    Sfoglia i Prodotti
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                          <div className="ml-4">
                            <h4 className="font-medium text-[#3E270C]">{item.name}</h4>
                            <p className="text-[#8B4513]">{item.price}€</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold text-[#3E270C]">Totale:</span>
                      <span className="font-bold text-lg text-[#3E270C]">{totalPrice}€</span>
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition-colors">
                      Procedi all'Acquisto
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3E270C]">Prenota la Tua Esperienza</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-[#D2B48C]/20 p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#3E270C]">Contattaci</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-[#8B4513]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <p>Via dei Vinai, 12<br />50123 Firenze, Italia</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-[#8B4513]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <p>+39 333 444 5566</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-[#8B4513]">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <p>info@concentodegustazioni.it</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                      <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Esperienza</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]">
                        <option value="">Seleziona esperienza</option>
                        {experiences.map(exp => (
                          <option key={exp.id} value={exp.id}>{exp.title} - {exp.price}€</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Data desiderata</label>
                      <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Note aggiuntive</label>
                      <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#8B4513] hover:bg-[#A0522D] text-white py-2 rounded-md transition-colors">
                      Invia Richiesta
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#2F1B0A] text-[#D2B48C] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Concento Degustazioni</h3>
              <p className="text-[#D2B48C]/80">
                Esperienze enologiche autentiche tra le colline toscane, con degustazioni guidate a Firenze e San Gimignano.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
              <ul className="space-y-2 text-[#D2B48C]/80">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-[#D2B48C] transition-colors">Home</button></li>
                <li><button onClick={() => setActiveTab('experiences')} className="hover:text-[#D2B48C] transition-colors">Esperienze</button></li>
                <li><button onClick={() => setActiveTab('shop')} className="hover:text-[#D2B48C] transition-colors">Shop</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="hover:text-[#D2B48C] transition-colors">Contatti</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Orari</h4>
              <ul className="space-y-2 text-[#D2B48C]/80">
                <li>Lunedì - Venerdì: 9:00 - 18:00</li>
                <li>Sabato: 10:00 - 16:00</li>
                <li>Domenica: Chiuso</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Iscriviti alla Newsletter</h4>
              <p className="text-[#D2B48C]/80 mb-4">Ricevi offerte speciali e aggiornamenti sulle nostre degustazioni.</p>
              <form className="flex">
                <input type="email" placeholder="Il tuo email" className="px-4 py-2 w-full rounded-l-md focus:outline-none text-black" />
                <button className="bg-[#8B4513] hover:bg-[#A0522D] px-4 py-2 rounded-r-md transition-colors">
                  Iscriviti
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#5C3D2E] mt-12 pt-6 text-center text-[#D2B48C]/60">
            <p>&copy; {new Date().getFullYear()} Concento Degustazioni. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
