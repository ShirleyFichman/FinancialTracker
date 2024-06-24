import { CircleFadingPlus } from 'lucide-react';
import React, { useState } from 'react';

const PlusMenu = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [type, setType] = useState('income');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setType('income');
      setCategory('');
      setAmount('');
      setFormVisible(false);
    };
  
    return (
      <div className="mr-10 ml-8">
        <CircleFadingPlus
          onClick={() => setFormVisible(!formVisible)}
          style={{ cursor: 'pointer' }}
        />
        {formVisible && (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Category:
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Amount (USD):
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    );
  };
  
  export default PlusMenu;
