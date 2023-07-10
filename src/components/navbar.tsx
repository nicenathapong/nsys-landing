import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <div
            className={`fixed pt-16 p-8 w-full bg-gradient-to-t from-black/40 via-black/40 to-black/0 bottom-0 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 ${
                isHomePage ? "navbar-home-animate" : ""
            }`}
        >
            <ul className="w-auto sm:w-[20%] hidden sm:block sm:flex items-center justify-center sm:justify-left space-x-6">
                <a href="https://any.in.th" title="Any">
                    <img
                        alt="Any"
                        width="32"
                        height="32"
                        src="images/any-logo-fit.png"
                    />
                </a>
                <a href="https://rdcw.th" title="RDCW">
                    <img
                        alt="RDCW"
                        width="42"
                        height="42"
                        src="images/rdcw_white.png"
                    />
                </a>
            </ul>
            <div className="w-full flex justify-center items-center space-x-6 text-base sm:text-lg">
                <Link to="/">/home</Link>
                <Link to="/facts">/facts</Link>
                <Link to="/roles">/roles</Link>
                <Link to="/works">/works</Link>
            </div>
            <ul className="w-auto sm:w-[20%] flex justify-center items-center sm:justify-end space-x-6">
                <a className="block sm:hidden" href="https://any.in.th" title="Any">
                    <img
                        alt="Any"
                        width="32"
                        height="32"
                        src="images/any-logo-fit.png"
                    />
                </a>
                <a className="block sm:hidden" href="https://rdcw.th" title="RDCW">
                    <img
                        alt="RDCW"
                        width="42"
                        height="42"
                        src="images/rdcw_white.png"
                    />
                </a>
                <a
                    href="https://webring.wonderful.software#nsys.site"
                    title="วงแหวนเว็บ"
                >
                    <img
                        alt="วงแหวนเว็บ"
                        width="32"
                        height="32"
                        src="https://webring.wonderful.software/webring.white.svg"
                    />
                </a>
            </ul>
        </div>
    );
}
