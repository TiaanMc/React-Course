import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('tiaan'); // name provides current state && setName will let you set the state.(name = getter  setName = setter)
    const [count, setCount] = useState(0);
    
    const handleNameChange = () => {
        const names = ["bob", "kevin", "tiaan"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

      const handleClick = () => {
        setCount(count + 1)
        console.log(count)
      }

      const handleClick2 = () => {
        console.log(count)
      }


    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click it</button>
            <button onClick={handleClick2}>Click it</button>
        </main>
    )
}

export default Content