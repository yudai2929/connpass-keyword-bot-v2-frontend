import { Profile } from "@/entities/profile";
import liff from "@line/liff";

export const liffInit = async () => {
  await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string });
};

export const liffLogin = async () => {
  liff.login();
};

export const liffLogout = async () => {
  liff.logout();
};

export const liffCloseWindow = () => {
  liff.closeWindow();
};

export const liffGetProfile = async (): Promise<Profile> => {
  const result = await liff.getProfile();
  return {
    userId: result.userId,
    displayName: result.displayName,
    pictureUrl: result.pictureUrl,
  };
};

export const liffSendMessages = (messages: any) => {
  return liff.sendMessages(messages);
};

export const liffGetAccessToken = () => {
  return liff.getAccessToken();
};

export const liffIsInClient = () => {
  return liff.isInClient();
};

export const liffIsLoggedIn = () => {
  return liff.isLoggedIn();
};
