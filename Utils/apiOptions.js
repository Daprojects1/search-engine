const options = (ApiString, value, APIKEY) => {
    if (ApiString === "WebSearchAPI") {
        return {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/' + ApiString,
            params: { q: value, pageNumber: '1', pageSize: '20', autoCorrect: 'true' },
            headers: {
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
                'X-RapidAPI-Key': APIKEY
            }
        }
    }
    if (ApiString === "NewsSearchAPI") {
        return {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
            params: {
                q: value,
                pageNumber: '1',
                pageSize: '10',
                autoCorrect: 'true',
                fromPublishedDate: 'null',
                toPublishedDate: 'null'
            },
            headers: {
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
                'X-RapidAPI-Key': APIKEY
            }
        };
    }
    if (ApiString === "ImageSearchAPI") {
        return {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
            params: { q: value, pageNumber: '1', pageSize: '80', autoCorrect: 'true' },
            headers: {
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
                'X-RapidAPI-Key': APIKEY
            }
        };

    }
}

export default options;