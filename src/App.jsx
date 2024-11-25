import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IGReport from "./IGReport";
import YTReport from "./YTReport";
import TTReport from "./TTReport";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <div className="p-10">
                            <Link to="/ig" className="my-2 block underline">
                                Instagram
                            </Link>
                            <Link to="/yt" className="my-2 block underline">
                                YouTube
                            </Link>
                            <Link to="/tt" className="my-2 block underline">
                                TikTok
                            </Link>
                        </div>
                    }
                    path="/"
                />

                <Route element={<IGReport />} path="/ig" />

                <Route element={<YTReport />} path="/yt" />

                <Route element={<TTReport />} path="/tt" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
