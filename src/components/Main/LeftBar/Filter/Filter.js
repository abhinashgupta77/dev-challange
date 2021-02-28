import React, { useState, useEffect } from "react";
import './Filter.scss'
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Filter = () => {

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("json/filterData.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFilterData(data);
      });
  }, []);

    return (
      <div className="filter">
        {filterData.map((item, index) => (
          <Accordion key={index} className="filter__accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.filterName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {item.filterType.map((filtertype, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox color="primary" />}
                    label={filtertype}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
}

export default Filter
