import TableCustomized from "@/src/views/tables/TableCustomized";
import { Card, CardHeader, Grid } from "@mui/material";
import ProductList from "@/src/features/product";
// ** MUI Imports
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/lab";
import { Link } from "mdi-material-ui";

const Product = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
            Product
        </Typography>
        <Typography variant='body2'>Tables display sets of data. They can be fully customized</Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          {/* <CardHeader
            title="Search"
            titleTypographyProps={{ variant: "h6" }}
          />
          <Divider sx={{ margin: 0 }} /> */}
          <form onSubmit={(e) => e.preventDefault()}>
            <CardContent>
              <Grid container spacing={5}>
                {/* <Grid item xs={12}>
                <Divider sx={{ marginBottom: 0 }} />
              </Grid> */}
                {/* <Grid item xs={12}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    2. Personal Info
                  </Typography>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    placeholder="Leonard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" placeholder="Carter" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="form-layouts-separator-select-label">
                      Country
                    </InputLabel>
                    <Select
                      label="Country"
                      defaultValue=""
                      id="form-layouts-separator-select"
                      labelId="form-layouts-separator-select-label"
                    >
                      <MenuItem value="UK">UK</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="Australia">Australia</MenuItem>
                      <MenuItem value="Germany">Germany</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone No."
                    placeholder="+1-123-456-8790"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                type="submit"
                sx={{ mr: 2 }}
                variant="contained"
              >
                Search
              </Button>
              <Button size="large" color="secondary" variant="outlined">
                Cancel
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Product List"
            titleTypographyProps={{ variant: "h6" }}
          />
          <ProductList />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Product;
