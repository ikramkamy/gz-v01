import * as React from 'react';
import TextField from '@mui/material/TextField/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete/Autocomplete';
import { UseProductsStore } from '../stores/ProductsStore';
import { useEffect, useState } from 'react';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({ handelsearchInput }) {
  const [value, setValue] = useState('');
  const { AllProducts, setAutocomleteSearchValue } = UseProductsStore((state) => state);
  const [productsTags, setProductsTags] = useState([]);

  useEffect(() => {
    const newProductsTags = AllProducts.map((e) => ({ title: e.name }));
    setProductsTags(newProductsTags);
    console.log('tags', newProductsTags)
  }, [AllProducts]);

  //console.log("autocomplete", value)

  return (
    <Autocomplete
      size='small'
      className='m-2 max-sm:w-full'
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'tring') {
          setValue({
            title: newValue,
          });
          setAutocomleteSearchValue(value)
          ///console.log(value)
          handelsearchInput()
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
          setAutocomleteSearchValue(value)
          handelsearchInput()
          //console.log(value)

        } else {
          setValue(newValue);
          setAutocomleteSearchValue(value)
          handelsearchInput()
          //console.log(value)

        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue!== '' &&!isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="Search for a product"
      options={productsTags}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          //setAutocomleteSearchValue(option)
         return option;
        } else {
          //setAutocomleteSearchValue(option.title)
          return option.title;
        }
      }}
      //getOptionLabel={(option) => option.title}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 150 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search for a product" size='small' className="bg-[#D6D6D6]" />
      )}
    />
  );
}