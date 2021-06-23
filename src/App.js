import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import GrabURL from "./components/GrabURL";
import RepoInfo from "./components/RepoInfo";
import Footer from "./components/Footer";
import "./App.css";

function App() {

	const [theme, setTheme] = React.useState({
		palette: {
			type: "light"
		}
	});
	const toggleTheme = () => {
		let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
		setTheme({
			...theme,
			palette: {
				type: newPaletteType
			}
		});
	}
	const muiTheme = createMuiTheme(theme);
	const [repoURL, setRepoURL] = React.useState("");

	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			<Grid container spacing={0} justify="center">
				<Grid container item xs={12}>
					<Grid item xs={12}>
						<Header toggle={toggleTheme} />
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={12}>
						<GrabURL setRepoURL={setRepoURL} />
					</Grid>
				</Grid>
				<Grid container item xs={11} md={10} lg={9}>
					<Grid item xs={12}>
						{repoURL ? <RepoInfo repoURL={repoURL} /> : null}
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={12}>
						<br />
						<Footer />
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
