import { DarkThemeToggle, Navbar, Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { AvatarBox } from "../components/AvatarBox";

export const Dashboard = () => {
  document.body.classList.add("overflow-hidden");

  return (
    <>
      <NavbarBox />
      <main id="main">Hello World</main>
    </>
  );
};

const NavbarBox = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navbarh = document.getElementById("navbar-h");
    navbarh!.style.height = navbar!.clientHeight + 1 + "px";
    setOpen(window.innerWidth > 768);
  }, []);

  return (
    <>
      <div id="navbar-h"></div>
      <Navbar id="navbar" className="border-b fixed z-8 w-full top-0 left-0">
        <Navbar.Brand
          href="/"
          className="transition-all hover:-rotate-6 hover:scale-125 overflow-auto flex-nowrap"
        >
          <img src="/logo.png" alt="logo" width={40} />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            <span className="hidden sm:block">FRISTROOP</span>
          </span>
        </Navbar.Brand>

        <div className="flex-1 mx-5">
          <Navbar.Toggle
            className="block md:block"
            onClick={() => setOpen(!isOpen)}
          />
        </div>

        <div className="flex md:order-2 gap-5 ms-1">
          <DarkThemeToggle />

          <AvatarBox />
        </div>
      </Navbar>

      <SidebarBox isOpen={isOpen} />
    </>
  );
};

interface Props {
  isOpen: boolean;
}

const SidebarBox: React.FC<Props> = (props) => {
  const { isOpen } = props;

  const navbarH = document.getElementById("navbar-h")?.clientHeight + "px";
  const style: React.CSSProperties = {
    marginLeft: isOpen ? "0px" : "-280px",
    transition: "margin-inline 0.35s ease-in-out",
    marginTop: navbarH,
    height: "calc(100vh - " + navbarH + ")",
  };

  useEffect(() => {
    const width = "257px";

    const main = document.getElementById("main");
    main!.style.marginLeft = isOpen ? width : "0px";
    main!.style.transition = "margin 0.35s ease-in-out";
    main!.style.width = isOpen ? `calc(100% - ${width})` : "100%";
    main!.style.transition = "all 0.35s ease-in-out";
  }, [isOpen]);

  return (
    <div>
      <Sidebar className="fixed top-0 left-0" style={style}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="dark"
            >
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
