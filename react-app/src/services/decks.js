export const fetchUserDecks = async (payload) => {
    const response = await fetch('/api/user-decks/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    return await response.json();
}
