"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const SPOTIFY_CLIENT_ID = "51a215f6113744d7bd6930816f384850";
const SPOTIFY_CLIENT_SECRET = "0850771e9054447295bf0bf8d1c44b65";

const SpotifyDashboard = () => {
  const [trendingSongs, setTrendingSongs] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const tokenResponse = await axios.post(
          "https://accounts.spotify.com/api/token",
          new URLSearchParams({
            grant_type: "client_credentials",
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET,
          }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const token = tokenResponse.data.access_token;
        const headers = { Authorization: `Bearer ${token}` };

        const trendingPlaylistId = "37i9dQZF1DXcBWIGoYBM5M"; // Example: Global Top 50
        const trendingRes = await axios.get(`https://api.spotify.com/v1/playlists/${trendingPlaylistId}`, { headers });
        const newReleasesRes = await axios.get("https://api.spotify.com/v1/browse/new-releases", { headers });
        const topArtistsRes = await axios.get("https://api.spotify.com/v1/artists?ids=1Xyo4u8uXC1ZmMpatF05PJ,6eUKZXaKkcviH0Ku9w2n3V,246dkjvS1zLTtiykXe5h60", { headers });

        setTrendingSongs(trendingRes.data.tracks.items.map(item => item.track));
        setNewReleases(newReleasesRes.data.albums.items);
        setTopArtists(topArtistsRes.data.artists);
      } catch (error) {
        console.error("Error fetching data from Spotify API", error);
      }
    };
    fetchSpotifyData();
  }, []);

  return (
    <div className="min-h-screen bg-[#EDE5D9] text-[#41362A] p-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#D77E1D]">Spotify Dashboard</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Trending Songs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingSongs.map((song, index) => (
            <div key={index} className="bg-[#41362A] text-white rounded-lg shadow-lg p-4">
              <img src={song.album.images[0].url} alt={song.name} className="w-full rounded-md" />
              <p className="text-lg font-semibold mt-2">{song.name}</p>
              <p className="text-sm opacity-80">{song.artists.map(artist => artist.name).join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">New Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newReleases.map((album, index) => (
            <div key={index} className="bg-[#D77E1D] text-white rounded-lg shadow-lg p-4">
              <img src={album.images[0].url} alt={album.name} className="w-full rounded-md" />
              <p className="text-lg font-semibold mt-2">{album.name}</p>
              <p className="text-sm opacity-80">{album.artists.map(artist => artist.name).join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Top Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topArtists.map((artist, index) => (
            <div key={index} className="bg-[#41362A] text-white rounded-lg shadow-lg p-4">
              <img src={artist.images[0]?.url} alt={artist.name} className="w-full rounded-md" />
              <p className="text-lg font-semibold mt-2">{artist.name}</p>
              <p className="text-sm opacity-80">Followers: {artist.followers.total.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpotifyDashboard;
