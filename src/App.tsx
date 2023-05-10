import { RouterProvider } from "react-router-dom";
import { routers } from "@/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={routers} />
		</ThemeProvider>
	);
}

export default App;
