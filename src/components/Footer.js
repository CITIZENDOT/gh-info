import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 20,
        flexDirection: "column"
    },
    link: {
        color: theme.palette.type === "light" ? "#05A485" : "#05F01E",
        textDecoration: "underline"
    }
}));

function Footer() {

    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root}>
            <Typography align="center" variant="h5">
                Idea Credit: <Link href="https://stackoverflow.com/questions/8646517/how-can-i-see-the-size-of-a-github-repository-before-cloning-it" target="blank" className={classes.link}>This</Link> stackoverflow question
            </Typography>
            <Typography align="center" variant="h5">
                Made with ❤️ by <Link href="https://github.com/CITIZENDOT" target="blank" className={classes.link}>CITIZENDOT</Link>
            </Typography>
        </BottomNavigation>
    );
}

export default Footer;