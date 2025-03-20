import { Box, FormControl, TextField } from "@mui/material";

const InputField = ({
  id,
  label,
  ariaDescribedby,
  ...rest
}: {
  id: string;
  label: string;
  ariaDescribedby: string;
} & React.ComponentProps<typeof TextField>) => {
  return (
    <Box sx={{ paddingBottom: 3 }}>
      <FormControl fullWidth>
        <TextField
          id={id}
          aria-describedby={ariaDescribedby}
          label={label}
          {...rest}
        />
      </FormControl>
    </Box>
  );
};

export default InputField;
