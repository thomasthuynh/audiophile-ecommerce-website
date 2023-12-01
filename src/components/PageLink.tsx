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
        } my-8 text-lg font-bold uppercase tracking-[1px] md:mx-4 md:my-0 md:text-sm lg:mx-6`}
      >
        {page}
      </li>
    </Link>
  );
};

export default PageLink;
