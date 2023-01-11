import axios from "axios";
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
  secret: 'ALVIM-GOSTOSTO',
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,user-library-read,user-read-private",
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.id = account.id;
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        
        try {
          const {data} = await axios.get('https://api.spotify.com/v1/me', {
            headers: { 
              'Authorization': 'Bearer ' + account.access_token,
            }
          })
          token.id = data.id
          
        } catch (err) {
          throw new Error()
        }

      }
      return token;
    },
    session({ session, token }: any) {
      session.user = token;
      return session;
    },
  },
};
export default NextAuth(authOptions);
