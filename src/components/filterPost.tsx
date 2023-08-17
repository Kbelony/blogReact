import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faGraduationCap,
  faScaleBalanced,
  faVirus,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

interface Tease {
  id: React.Key | null | undefined;
  icon: string;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}

interface FilterDropdownProps {
  teaseLists: Tease[];
  handleTeaseClick: (title: string | number | boolean) => void;
}

function FilterDropdown({ teaseLists, handleTeaseClick }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="filter-mobile-body">
        <button
          className={`btn btn-primary ${isOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#filterCollapse"
          aria-expanded={isOpen}
          aria-controls="filterCollapse"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filtres
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <div className={`collapse ${isOpen ? "show" : ""}`} id="filterCollapse">
          <div className="card card-body">
            {teaseLists.map((tease: Tease) => (
              <div key={tease.id}>
                <div>
                  {tease.icon === "faScaleBalanced" && (
                    <FontAwesomeIcon icon={faScaleBalanced} />
                  )}
                  {tease.icon === "faVirus" && (
                    <FontAwesomeIcon icon={faVirus} />
                  )}
                  {tease.icon === "faGraduationCap" && (
                    <FontAwesomeIcon icon={faGraduationCap} />
                  )}
                  {tease.icon === "faHammer" && (
                    <FontAwesomeIcon icon={faHammer} />
                  )}
                  <a
                    onClick={() => {
                      if (
                        typeof tease.title === "string" ||
                        typeof tease.title === "number" ||
                        typeof tease.title === "boolean"
                      ) {
                        handleTeaseClick(tease.title);
                      }
                    }}
                  >
                    {tease.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterDropdown;
