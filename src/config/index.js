let API_URL = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
	API_URL = "http://localhost:5000";
} else {
	API_URL = "https://guild-announcements-page.herokuapp.com";
}

// DATABASE_URL=postgres://postgres:postgres@localhost:5432/announcements

export const config = {
	API_URL,
};
