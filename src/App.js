import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";
import Superheroes from "./components/SuperHeroes.page";
import { RQSuperHero } from "./components/RQSuperHero.page";
import { ParallelQueries } from "./components/ParallelQueries.page";
import { DynamicParallel } from "./components/DynamicParallel.page";
import { DependentQueries } from "./components/DependentQueries.page";
import { PaginatedQueries } from "./components/PaginatedQueries.page";
import { InfiniteQueries } from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-infinite" element={<InfiniteQueries />} />
            <Route path="/rq-paginated" element={<PaginatedQueries />} />
            <Route path="/rq-dependent" element={<DependentQueries email='vishwas@example.com' />} />
            <Route path="/rq-dynamic-parallel" element={<DynamicParallel heroIds={[1,3]} />} />
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
            <Route path="/super-heroes" element={<Superheroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
