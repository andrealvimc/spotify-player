import { AxiosInstance } from "axios"
import { Playlist } from "../types/interfaces"

interface getSSRPlaylistsReturn {
  playlists: Playlist[]
}

export const getSSRPlaylists = async (accessToken: string, api: AxiosInstance, userId: string): Promise<getSSRPlaylistsReturn> => {
  try {
    const { data } = await api.get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })

    return {
        playlists: data.items as Playlist[] 
    }
  } catch (err) {
    console.log(err, 'error')
  }

  return {
    playlists: [] as Playlist[]
  }
}