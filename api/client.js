import {REACT_APP_BASE_URL, REACT_APP_API_KEY, REACT_DUMMY_URL} from "@env"

// API keys should not be displayed in production applications as they are intended for development and testing purposes only.
// This is set like so for developers who want to play with the App.
export const baseURL = REACT_APP_BASE_URL || "https://newsapi.org/v2"
export const apiKey = REACT_APP_API_KEY || 'e8d28130c9414eb9ae3fa39c67553511'
export const dummyImageUrl = REACT_DUMMY_URL || 'https://dummyimage.com/600x400/f7f7f7/000000&text=N'