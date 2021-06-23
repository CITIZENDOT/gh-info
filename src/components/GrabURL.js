import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 10
    }
}));

function GrabURL({ setRepoURL }) {

    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        setRepoURL(e.target.repoURL.value);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <Grid container spacing={2} justify="center" style={{ margin: "0", width: "100%" }}>
                <Grid item xs={10} md={9} lg={10}>
                    <TextField name="repoURL" type="text" variant="outlined" label="Github URL" fullWidth size="medium" />
                </Grid>
                <Grid item xs={8} md={4} lg={3}>
                    <Button type="submit" variant="contained" color="secondary" fullWidth size="large">Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default GrabURL;