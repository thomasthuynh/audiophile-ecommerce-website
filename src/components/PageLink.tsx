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
    <Link to={`/${page}`} onClick={() => setSelectedPage(lowerCasePage)}>
      <li
        className={`${
          lowerCasePage === selectedPage ? "text-primary-500" : ""
        } mr-8 text-sm uppercase hover:text-primary-500 font-medium`}
      >
        {page}
      </li>
    </Link>
  );
};

export default PageLink;
