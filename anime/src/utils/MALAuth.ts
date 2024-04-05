/**
 * auth flow blog
 * https://myanimelist.net/blog.php?eid=835707
 */
import axios from "axios";

import { randomBytes, createHash } from "crypto";

const clientId: string = "6cfd3ca322e262b878ebd71a619ff25c";
const redirectUrl: string = "http://localhost:3000/0auth/verify";
export function createAuthChallenge(): {authUrl: string, codeVerifier: string} {
    // Your application"s client ID and redirect URI
    
    // Generate a code verifier and code challenge for PKCE
    const codeVerifier: string = randomBytes(32).toString("hex");
    const codeChallenge: string = createHash("sha256")
      .update(codeVerifier)
      .digest("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, ""); // Remove any trailing equal signs
    
    // Construct the authorization URL
    const authUrl: string = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&code_challenge=${encodeURIComponent(codeChallenge)}&code_challenge_method=S256`;
    return {
        authUrl: authUrl,
        codeVerifier: codeVerifier
    }
    
}


const VerifyUrl: string = "http://localhost:3000/0auth/verify";
export async function verifyCode(redirectCode: string, codeVerifier: string) {
    const resp = axios.post("https://myanimelist.net/v1/oauth2/authorize",{
        grant_type: "authorization_code",
        client_id: clientId,
        redirect_uri: VerifyUrl,
        code: redirectCode,
        code_verifier: codeVerifier,
    })
    return resp;
}