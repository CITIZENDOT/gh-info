import React from "react";
import axios from "axios";
import parse from "parse-github-repo-url";
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import filesize from "filesize";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    link: {
        color: theme.palette.type === "light" ? "#05A485" : "#05F01E",
        textDecoration: "underline"
    }
}));

function RepoInfo({ repoURL, setRepoURL }) {
    const [isLoading, setLoading] = React.useState(true);
    const [repoData, setRepoData] = React.useState("");
    const [error, setError] = React.useState("");

    const owner = React.useRef(null), repoName = React.useRef(null);

    const fetchData = async () => {
        if (repoURL.slice(-1) === "/") {
            setRepoURL(repoURL.slice(0, -1));
        }
        if (parse(repoURL)) {
            [owner.current, repoName.current] = parse(repoURL);
            setError(null);
        } else {
            setError("ParseError");
        }

        if (!error) {
            try {
                const response = (await axios.get(`https://api.github.com/repos/${owner.current}/${repoName.current}`)).data;
                setRepoData(response);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
    };

    const getDateString = (d) => {
        const joinDate = (t, a, s) => {
            // Source: https://stackoverflow.com/a/3552493/12347371
            return a.map((m) => {
                let f = new Intl.DateTimeFormat("en", m);
                return f.format(t);
            }).join(s);
        }
        return joinDate(d, [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }], ' ');
    }

    React.useEffect(() => {
        fetchData();
    }, [repoURL]);

    const classes = useStyles();

    return isLoading ? (<LinearProgress color="primary" />) : ((error) ? (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            It seems like given URL is <strong>invalid</strong>.
        </Alert>
    ) : (
        <Card elevation={12} className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar src={repoData.owner.avatar_url} />
                }
                title={
                    <Typography variant="h6">
                        <Link href={`https://github.com/${owner.current}/${repoName.current}`} target="_blank" className={classes.link}>
                            {`${owner.current}/${repoName.current}`}
                        </Link>
                    </Typography>
                }
            />
            <CardContent>
                <Typography variant="h2">{filesize(repoData.size * 1024)}</Typography>
                <Typography variant="h4">{`${repoData.stargazers_count} ⭐ stars`}</Typography>
                <Typography variant="h4">{`${repoData.forks} 🍴 forks`}</Typography>
                <Typography variant="h6">
                    {`Created at: ${getDateString(new Date(repoData.created_at))}`}
                </Typography>
                <Typography variant="h6">{`Most used Langauge: ${repoData.language}`}</Typography>
                {(repoData.license != null) ?
                    (<Typography variant="h6">
                        <Link href={`https://choosealicense.com/licenses/${repoData.license.key}`} target="_blank" className={classes.link}>
                            {repoData.license.name}
                        </Link>
                    </Typography>) :
                    (<Typography variant="h6">{"Doesn't have a Licence"}</Typography>)
                }
            </CardContent>
        </Card>
    ));
}

export default RepoInfo;