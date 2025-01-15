```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Moved this route to the end to resolve the conflict */}        
        <Route path="/users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  return <div>Home</div>;
}

function About() { 
  return <div>About</div>;
}

function Users() { 
  return <div>Users</div>;
}
export default App;
```