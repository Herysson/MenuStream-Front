import { useState } from 'react';
import { Card } from './components/card/card';
import { useProductData } from './hooks/useProductData';
import { CreateModal } from './components/create-modal/create-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar } from './components/navbar/navbar';

function App() {
  const { data } = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center">MenuStream</h1>
        <div className="container">
          <div className="row justify-content-center">
            {data?.map(productData => (
              <Card
                key={productData.id} // Ensure each child in a list has a unique "key" prop
                price={productData.price}
                name={productData.name}
                image={productData.image}
              />
            ))}
          </div>
        </div>
        {isModalOpen && <CreateModal closeModal={handleCloseModal} />}
        <button onClick={handleOpenModal} className="btn btn-primary mt-3">Novo</button>
      </div>
    </>
  );
}

export default App;
