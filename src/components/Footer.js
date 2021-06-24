import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        width: '100%',
        bottom: 10,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    link: {
        color: theme.palette.type === "light" ? "#05A485" : "#05F01E",
        textDecoration: "underline"
    }
}));

function Footer() {

    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Typography align="center" variant="caption">
                Idea Credit: <Link href="https://stackoverflow.com/questions/8646517/how-can-i-see-the-size-of-a-github-repository-before-cloning-it" target="blank" className={classes.link}>This</Link> stackoverflow question
            </Typography>
            <Typography align="center" variant="caption" >
                Made with ❤️ by <Link href="https://github.com/CITIZENDOT" target="blank" className={classes.link}>CITIZENDOT</Link>
            </Typography>
        </footer>
    );
}

export default Footer;