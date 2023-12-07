import { Link } from "react-router-dom";
import { SelectedPage } from "../types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  modalToggled: boolean;
  setModalToggled: (value: boolean) => void;
};

const PageLink = ({
  page,
  selectedPage,
  setSelectedPage,
  modalToggled,
  setModalToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase() as SelectedPage;

  const handleModal = () => {
    if (modalToggled) {
      setModalToggled(false);
    }

    setSelectedPage(lowerCasePage);
  };

  return (
    <Link
      to={`/${page}`}
      onClick={handleModal}
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
