import { createSlice } from '@reduxjs/toolkit';
import { ApiStatusCode, createAsyncThunkAction, getApiInitalState } from '../utils/apiHelpers';

// Define a type for the slice state
export type ListeningToStateData = {
  track: string | undefined;
  artist: string | undefined;
  link: string | undefined;
};

// Define the initial state using that type
const initialState = getApiInitalState<ListeningToStateData>({
  track: undefined,
  artist: undefined,
  link: undefined,
});

export const fetchListeningTo = createAsyncThunkAction<ListeningToStateData, void>(
  'listeningTo/fetchListeningTo',
  async () => {
    let track: string | undefined, artist: string | undefined, link: string | undefined;

    try {
      const { recenttracks } = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${process.env.REACT_APP_USER}&api_key=${process.env.REACT_APP_API_KEY}&limit=1&nowplaying=true&format=json`,
      ).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Whoops! Something went wrong with Last.fm');
      });

      track = recenttracks.track[0].name;
      artist = recenttracks.track[0].artist['#text'];

      if (!track || !artist) {
        throw new Error('Whoops! Something went wrong with Last.fm');
      }

      // eslint-disable-next-line camelcase
      const { access_token } = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + process.env.REACT_APP_AUTH,
        },
        body: 'grant_type=client_credentials',
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Whoops! Something went wrong with Spotify');
      });

      const { tracks } = await fetch(
        `https://api.spotify.com/v1/search?q=${track.replaceAll(' ', '%20')}%20${artist.replaceAll(
          ' ',
          '%20',
        )}&type=track&limit=1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // eslint-disable-next-line camelcase
            Authorization: 'Bearer ' + access_token,
          },
        },
      ).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Whoops! Something went wrong with Spotify');
      });

      link = tracks.items[0].external_urls.spotify;
    } catch (error) {
      throw new Error(`${error}`);
    }

    return { track, artist, link };
  },
);

export const listeningToSlice = createSlice({
  name: 'listeningTo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListeningTo.pending, (state) => {
      state.status = ApiStatusCode.pending;
    });
    builder.addCase(fetchListeningTo.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = ApiStatusCode.succeeded;
    });
    builder.addCase(fetchListeningTo.rejected, (state, { payload }) => {
      state.status = ApiStatusCode.failed;

      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default listeningToSlice.reducer;
