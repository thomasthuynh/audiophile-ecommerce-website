import { Link } from "react-router-dom";
import { SelectedPage } from "../types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const PageLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase() as SelectedPage;

  return (
    <Link
      to={`/${page}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className="hover:text-primary-500"
    >
      <li
        className={`${
          lowerCasePage === selectedPage ? "text-primary-500" : ""
        } font-bold uppercase tracking-[1px]`}
      >
        {page}
      </li>
    </Link>
  );
};

export default PageLink;
