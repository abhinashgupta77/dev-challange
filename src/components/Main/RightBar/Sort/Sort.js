import React from 'react'
import './Sort.scss'
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Sort = () => {

    return (
      <div className="custom">
        <FormControl className="custom__dropdown" variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Sort By</InputLabel>
          <Select
            className="custom__dropdown__select"
            native
            value="1"
            label="Sort By"
          >
            <option value={10}>Newest first</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <FormControl className="custom__dropdown condition" variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">
            Condition
          </InputLabel>
          <Select
            className="custom__dropdown__select"
            native
            value="1"
            label="Condition"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <FormControl className="custom__dropdown delivery" variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">
            Delivery options
          </InputLabel>
          <Select
            className="custom__dropdown__select"
            native
            value="1"
            label="Delivery options"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>
    );
}

export default Sort
