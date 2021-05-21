import Navbar from "./Navbar";
import Footer from "./Footer";
import Grid from '@material-ui/core/Grid';

function BaseTemplate() {
    return (
      <Grid container spacing={3}>
        <Navbar />
        <Footer />
      </Grid>
    )
}

export default BaseTemplate;
